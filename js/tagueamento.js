// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
//////////////////////////////////////////////////////////////////////////

//Os eventos estão diretamente em seus respectivos elementos no HTML e main.js
//Disparo de coleta do Google Analytics contendo a variável 'ga' para customização dos eventos
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

//Evento dispara quando o usuário clicar no link externo "Entre em contato" em todas as páginas
function link_externo() {
    ga('send', 'event', {
      eventCategory: 'menu',
      eventAction: 'entre_em_contato',
      eventLabel: 'link_externo'
    });
  }

//Evento dispara quando o usuário clicar no link externo "Download PDF" em todas as páginas
function link_pdf() {
    ga('send', 'event', {
      eventCategory: 'menu',
      eventAction: 'download_pdf',
      eventLabel: 'download_pdf'
    });
  }

//Evento dispara quando o usuário clicar no botão "Lorem" da página analise.html
function click_lorem() {
    ga('send', 'event', {
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Lorem'
      });
    }

//Evento dispara quando o usuário clicar no botão "Ipsum" da página analise.html
function click_ipsum() {
    ga('send', 'event', {
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Ipsum'
      });
    }

//Evento dispara quando o usuário clicar no botão "Dolor" da página analise.html
function click_dolor() {
    ga('send', 'event', {
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Dolor'
      });
    }

//Evento dispara quando o usuário terminar de digitar o campo de nome no formulário da página sobre.html
function input_nome() {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'nome',
        eventLabel: 'preencheu'
        });
    }

//Evento dispara quando o usuário terminar de digitar o campo de e-mail no formulário da página sobre.html
function input_email() {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'email',
        eventLabel: 'preencheu'
      });
    }

//Evento dispara quando o usuário terminar de digitar o campo de telefone no formulário da página sobre.html
function input_telefone() {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'telefone',
        eventLabel: 'preencheu'
      });
    }

//Evento dispara quando o usuário clicar no botão de "Aceito que entrem em contato" no formulário da página sobre.html
function submit_aceito() {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'aceito',
        eventLabel: 'preencheu'
      });
    }

//Evento dispara quando o usuário clicar no botão de "Enviar" o formulário da página sobre.html (localizado no main.js)
function submit_envio() {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
      });
    }

