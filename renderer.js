const themeSource = document.getElementById('theme-source');

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
	const isDarkMode = await window.darkMode.toggle();
	themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light';
});

document.getElementById('reset-to-system').addEventListener('click', async () => {
	await window.darkMode.system();
	themeSource.innerHTML = 'System';
});