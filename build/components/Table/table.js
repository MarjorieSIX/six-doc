/**
 * @name makeAllSortable
 * @description Makes the specified tables sortable. If no arguments are passed
 * it will make all tables on the page it is run on sortable.
 * @param {string} [tableClass] - Class name for the table or tables you want to
 * be sortable. If undefined function will instead look for all table elements
 * @param {HTMLElement} [parent=document.body] - The parent element of the tables
 * specified in the tableClass argument
 */
function makeAllSortable(tableClass, parent) {
  parent = document.getElementById(parent) || document.body;

  const table = (
    typeof tableClass !== 'undefined' ?
      parent.getElementsByClassName(tableClass) :
      parent.getElementsByTagName('table')
  );

  let numTables = table.length;

  // Run through every table on the page and make them all sortable
  while (--numTables >= 0) {
    makeSortable(table[numTables]);
  }

  /**
  * @name fixComparison
  * @description Fixes to values for comparison in sortTable
  *
  * @param {string} a - First item being compared
  * @param {string} b - Second item being compared
  * @return {string[]} The adjusted a and b fixed for comparison
  */
  function fixComparison(a, b) {
    let diff;

    if (a.length !== b.length) {
      if (a.length > b.length) {
        diff = a.length - b.length;
        for (let k = 0; k < diff; k++) {
          b = '0' + b;
        }
      }
      else {
        diff = b.length - a.length;
        for (let k = 0; k < diff; k++) {
          a = '0' + a;
        }
      }
    }

    return [a, b];
  }

  /**
  * @name sortTable
  * @description Takes a given table and column, as well as whether or not the
  * column has already been reversed, as input, and then sorts the table column
  *
  * @param {HTMLElement} table
  * @param {HTMLElement} col
  * @param {number} reverse - 1 for true 0 for false
  * @todo Refactor logic for optimization & implement a datetime sorting solution
  */
  function sortTable(table, col, reverse) {
    const T_BODY = table.tBodies[0], // ignore `<thead>` and `<tfoot>` rows
          IS_NUM = /^[0-9]*\.?[0-9]+$/;

    let tRows = Array.prototype.slice.call(T_BODY.rows, 0); // Put rows into array

    reverse = -((+reverse) || -1);

    tRows = tRows.sort(function(a, b) { // Sort rows
      let tempA = a.cells[col].textContent.trim(),
          tempB = b.cells[col].textContent.trim();

      if (tempA.slice(-1) === '%' || tempB.slice(-1) === '%') {
        if (tempA.slice(-1) === '%') {
          tempA = tempA.slice(0, tempA.length - 1);
        }
        if (tempB.slice(-1) === '%') {
          tempB = tempB.slice(0, tempB.length - 1);
        }
        [tempA, tempB] = fixComparison(tempA, tempB);
      }
      else if (tempA.substr(0, 1) === '$' || tempB.substr(0, 1) === '$') {
        if (tempA.substr(0, 1) === '$') {
          tempA = tempA.slice(1, tempA.length);
        }
        if (tempB.substr(0, 1) === '$') {
          tempB = tempB.slice(1, tempB.length);
        }
        [tempA, tempB] = fixComparison(tempA, tempB);
      }
      else if (IS_NUM.test(stripCommas(tempA)) ||
          IS_NUM.test(stripCommas(tempB))) {
        if (IS_NUM.test(stripCommas(tempA))) {
          tempA = stripCommas(tempA) + '';
        }
        if (IS_NUM.test(stripCommas(tempB))) {
          tempB = stripCommas(tempB) + '';
        }
        [tempA, tempB] = fixComparison(tempA, tempB);
      }

      return reverse * (tempA.localeCompare(tempB));
    });

    for (let i = 0; i < tRows.length; ++i) {
      T_BODY.appendChild(tRows[i]); // append each row in order
    }
  }

  /**
  * @name makeSortable
  * @description Makes a table sortable
  *
  * @param {HTMLElement} table - The table being sorted
  */
  function makeSortable(table) {
    let th = table.tHead,
        i;

    th && (th = th.rows[0]) && (th = th.cells);

    if (th) {
      i = th.length;
    }
    else {
      return; // if no `<thead>` then do nothing
    }

    while (--i >= 0) {
      (function(i) {
        var dir = 1;
        th[i].addEventListener('click', function() {
          sortTable(table, i, (dir = 1 - dir));
        });
      }(i));
    }
  }
}

/**
 * @name stripCommas
 * @description Takes a string of a number with commas in it and strips the
 * commas out of the string, returning the number value.
 *
 * @param {string} x - A string representing a number that is displayed with
 * commas
 *
 * @return {number} The number value of the string with the commas
 * stripped
 */
function stripCommas(x) {
  return (x + '').replace(/\,/g, '') * 1;
}

window.onload = function() {
    makeAllSortable();
};