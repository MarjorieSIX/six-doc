
/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) If not a button, add ARIA role and - to be safe - tabindex=0
 * 3) Add explicit keyboard handling for SPACE (like a real <button>)
 * 4) Add aria-expanded (based on initial state)
 * 5) On click, find the nav dropdown trigger parent
 * 6) If the nav dropdown trigger parent already has active class, remove it and set aria-expanded=false on toggle.
 * 7) If the nav dropdown trigger parent does not have an active class, add it and set aria-expanded=true on toggle.
 */
(function(){

	var navLink = document.querySelectorAll('.js-nav-dropdown-trigger'); /* 1 */

	for (i=0; i<navLink.length; i++) { /* 1 */

		if (navLink[i].nodeName != 'BUTTON') { /* 2 */
			  navLink[i].setAttribute('role','button');
				navLink[i].setAttribute('tabindex','0');

				navLink[i].addEventListener('keypress',function(event){ /* 3 */
							if (event.keyCode == 32) {
									event.preventDefault();
									this.click();
							}
				});
		}

		if (navLink[i].parentNode.classList.contains('is-active')) {  /* 4 */
				navLink[i].setAttribute('aria-expanded','true');
		}
		else {
				navLink[i].setAttribute('aria-expanded','false');
		}

		navLink[i].addEventListener('click',function(event){ /* 5 */
	        event.preventDefault();
	        var navLinkParent = this.parentNode; /* 5 */

	        if (navLinkParent.classList.contains('is-active')) { /* 6 */
	            navLinkParent.classList.remove('is-active');
							this.setAttribute('aria-expanded', 'false');
	        }
	        else { /* 7 */
	            navLinkParent.classList.add('is-active');
							this.setAttribute('aria-expanded', 'true');
	        }
		});
	}

	/**
	 * Toggles active class on the primary nav panel
	 * 1) Select all nav triggers and cycle through them
	 * 2) If not a button, add ARIA role and - to be safe - tabindex=0
	 * 3) Add explicit keyboard handling for SPACE (like a real <button>)
	 * 4) Add aria-expanded (based on initial state)
	 * 5) On click, find the nav panel within the header
	 * 6) If the navPanel already has active class, remove it and set aria-expanded=false on toggle.
	 * 7) If the navPanel does not have an active class, add it and set aria-expanded=true on toggle.
	 */
	var navToggle = document.querySelectorAll('.js-nav-trigger');/* 1 */

	for (i=0; i<navToggle.length; i++) { /* 1 */

		if (navToggle[i].nodeName != 'BUTTON') { /* 2 */
			  navToggle[i].setAttribute('role','button');
				navToggle[i].setAttribute('tabindex','0');

				navToggle[i].addEventListener('keypress',function(event){ /* 3 */
							if (event.keyCode == 32) {
									event.preventDefault();
									this.click();
							}
				});
		}

		if (navToggle[i].parentNode.classList.contains('is-active')) {  /* 4 */
				navToggle[i].setAttribute('aria-expanded','true');
		}
		else {
				navToggle[i].setAttribute('aria-expanded','false');
		}

		navToggle[i].addEventListener('click',function(event){ /* 5 */
	        event.preventDefault();
	        var navToggleParent = this.parentNode; /* 5 */
	        var navPanel = navToggleParent.querySelector('.js-nav-panel'); /* 5 */

	        if (navPanel.classList.contains('is-active')) { /* 6 */
	            navPanel.classList.remove('is-active');
							this.setAttribute('aria-expanded', 'false');
	        }
	        else { /* 7 */
	            navPanel.classList.add('is-active');
							this.setAttribute('aria-expanded', 'true');
	        }
		});
	}

	/**
	 * Sets aria-current to the current navigation link
	 * 1) Select all items denoted as current
	 * 2) Add the aria-current attribute
	 */

	 	var navLink = document.querySelectorAll('.is-current'); /* 1 */

	 	for (i=0; i<navLink.length; i++) { /* 1 */
			navLink[i].setAttribute('aria-current', 'page'); /* 2 */
		}

})();