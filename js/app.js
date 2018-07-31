messages = [
    '<div class="ballon-right alert alert-info"> Hello, my name is "Alpha 5"</div>',
    '<div class="ballon-right alert alert-info"> I was an "Accountant Student", but right now I’m studying Web Development."</div>',
    '<div class="ballon-right alert alert-info"> I like to watch movies and read books."</div>'
];

var counter = 0;
var ONE_SECOND = 1000;
var bodyChat = document.querySelector('.chat-body');
var formulario = document.forms.chatFooter;

var program = setInterval(ingresarTexto, ONE_SECOND);
var ask = setInterval(askUserName,ONE_SECOND * 4);

function ingresarTexto() {
    bodyChat.innerHTML += messages[counter];
    scrollToBottom()
    counter++;
    if (counter >= messages.length) {
        clearInterval(program);
    }
}

function askUserName() {
    var textBox = document.querySelector('#chatFooter input');
    var btn = document.querySelector('#chatFooter button')
    textBox.placeholder = "Please, give me your Name <---"
    textBox.disabled = false;
    btn.disabled = false;
    textBox.focus();
}

function scrollToBottom() {
    bodyChat.scrollTop = bodyChat.scrollHeight;
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    textBox = e.target.elements.textBoxChatFooter;
    btn = e.target.elements.buttonChatFooter;
    
    if (textBox.value.length === 0) {
        bodyChat.innerHTML += "<div class='ballon alert alert-warning'><strong>Warning!</strong> I need a Name, please!!!</div>";
        scrollToBottom();
        textBox.focus();
    }else if(textBox.value.length > 6) {
        bodyChat.innerHTML += "<div class='ballon alert alert-success'><strong>Long Name!</strong> Nice to meet you, '"+ textBox.value + "'.</div>";
        scrollToBottom();
        textBox.focus();
    } else{
        bodyChat.innerHTML += "<div class='ballon alert alert-success'><strong>Short Name!</strong> Nice to meet you, '"+ textBox.value + "'.</div>";
        scrollToBottom();
        textBox.focus();
    }
});

