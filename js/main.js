function enviarEmail(email, assunto, corpo) {
    Email.send(
        email,
        "teamprogbear@gmail.com",
        assunto,
        corpo
    );
}
var btn_pressionado;
function mudarSelec(classe, pressionado)
{
	console.log (classe + "\n" + pressionado);
	const btns = document.getElementsByClassName(classe);
	const btn_p = document.getElementById(pressionado);
	btn_pressionado = btn_p;
	for (var i = 0; i < btns.length; i++) {
		if (btns[i] != btn_p)
		{
			if (btns[i].classList.contains("Pag-atual"))
			{
				btns[i].classList.remove("Pag-atual");
			}
			if (!btns[i].classList.contains("Pag-outras"))
			{
				btns[i].classList.add("Pag-outras");
			}
		}
		else
		{
			if (btns[i].classList.contains("Pag-outras"))
			{
				btns[i].classList.remove("Pag-outras");
			}
			if (!btns[i].classList.contains("Pag-atual"))
			{
				btns[i].classList.add("Pag-atual");
			}
		}
	}
}

function addOnScroll()
{
	setTimeout(function()
	{
		window.addEventListener('scroll', unselect);
	}, 200)
}

function unselect(e)
{
	btn_pressionado.classList.remove("Pag-atual");
	window.removeEventListener('scroll', unselect);
}