let keybuffer = "";

const output = document.getElementById("terminal");
const input = document.getElementById("input");

document.addEventListener('keydown', function(event)
{

    event.preventDefault();

    if (event.key == " ")
    {
        keybuffer += event.key;
        input.textContent += "\u00A0";
    }
    else if (event.key.length == 1)
    {
        keybuffer += event.key;
        input.textContent += event.key;
    }
    else if (event.key == "Enter")
    {
        output.innerHTML += execute_command();
        input.textContent = "> "
        keybuffer = "";
    }
    else if (event.key == "Backspace")
    {
        if (keybuffer.length > 0)
        {
            keybuffer = keybuffer.substring(0, keybuffer.length - 1);
            input.textContent = input.textContent.substring(0, input.textContent.length - 1);
        }
    }
});

function execute_command()
{
    let split = keybuffer.split(" ");

    switch (split[0])
    {
        case "help":
            out = "===== Help Menu =====<br>help - shows this message.<br>about - who am I?<br>projects - lists my projects.";
            break;
        case "about":
            out = "I like programming mostly for fun.<br>Sometimes I try to make cool things but then I don't finish.<br>🇮🇱 Stand with Israel 🇮🇱<br><br><a href = \"https://github.com/namegoesthere\">My Github</a>"
            break;
        case "projects":
            out = "<a href=\"https://namegoesthere.github.io/WaluigiClient/\">Waluigi Client - Funny little mario cheat</a><br><a href=\"https://github.com/EvanZhouDev/TheDonutProject\">The Donut Project (donut.sb3) - Making donuts in every language</a>";
            break;
        default:
            out = `<span style=\"color: #ff0000\">${split[0]}: Command not found</span>`;
            break;
    }
    return "<br><br>" + out;
}