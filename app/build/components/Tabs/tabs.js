/**
 * Activation des onglets
 * 1) Ajoute la classe is-active au premier onglet et affiche son contenu par défaut
 * 2) Ajoute la classe is-active au premier js-tabs-list-item
 * 3) Au clique sur un onglet, la fonction openTab est activée pour éviter que la page saute
 */

(function(){

  var tabContainer = document.querySelectorAll('.js-tabs');
  var tabBtn = document.querySelectorAll('.js-tab');
  var tabsList = document.querySelectorAll('.js-tabs-list');
  
  /* Activation des onglets 1/3 */
  for (i=0; i<tabContainer.length; i++) {
    var tabFirst = tabContainer[i].querySelector('.js-tab:first-child');
    var tabPanelFirst = tabContainer[i].querySelector('.js-tabs-panel:first-child');
    tabFirst.classList.add('is-active');
    tabPanelFirst.classList.add('is-active');
  }

  /* Activation des onglets 2/3 */
  for (i=0; i<tabsList.length; i++) {
    if (tabsList[i].querySelectorAll('.js-tabs-list-item').length > 0) {
      var tabsListItem = tabsList[i].querySelector('.js-tabs-list-item:first-child');
      tabsListItem.classList.add('is-active');
    }
  }

  /* Activation des onglets 3/3 */
  for (i=0; i<tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function (e) {
      e.preventDefault();
      openTab(this);
    });
  }

  /**
   * Fonction openTab
   * 1) Pass in clicked tab into function as item
   * 2) Get href of the clicked tab.
   * 3) Remove active class from all tabs on click (click event above).
   *    Add active class to clicked tab.
   * 4) Select this tab's href and create new Href. If tab href exists on click,
   *    add active class to the tab.
   * 5) Select all tabs panels. On click remove all active classes from panels.
   *    Add class to panel associated with tab clicked on.
   * 7) Add active class to tab whose href matches the correct tabs panel.
   */


  function openTab(item) {
    thisHref = item.getAttribute('href');

    var tabParent = item.parentNode.parentNode.parentNode;
    var tabBtns = tabParent.querySelectorAll('.js-tab');

    for (j=0; j<tabBtns.length; j++) {
      tabBtns[j].classList.remove('is-active');
    }

    item.classList.add('is-active');

    var newHref = document.querySelector(thisHref);
    var newerHref = newHref.querySelector('.js-tabs-panel');
    var firstLink = newHref.querySelector('.js-tab');
    if (firstLink) {
      firstLink.classList.add('is-active');
    }

    var tabsPanel = tabParent.querySelectorAll('.js-tabs-panel');
    for (j=0; j<tabsPanel.length; j++) {
      tabsPanel[j].classList.remove('is-active');
      if (newerHref) {
        newerHref.classList.add('is-active');
      }
    }

    document.querySelector(thisHref).classList.add('is-active');
  }

})();
