const render = (page) => document.getElementById('main').innerHTML = `<object type="text/html" data="./pages/${page}.html" ></object>`;
render('homepage');