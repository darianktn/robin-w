document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsWrap = document.querySelectorAll('.tabs__wrap');
	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsBtn.forEach((el) => {
			el.classList.remove('tabs__btn--active');
		});
		document
			.querySelector(`[data-tabs-path="${path}"]`)
			.classList.add('tabs__btn--active');

		tabsWrap.forEach((el) => {
			el.classList.remove('tabs__wrap--active');
		});
		document
			.querySelector(`[data-tabs-target="${path}"]`)
			.classList.add('tabs__wrap--active');
	};
});
