// Get the elements
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


// Starts the game
function startGame() {
  state = {}
  showTextNode(1)
}

// Shows the text and options
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  // Error handling
  if (textNode == null) {
    textNode = -1
  }
  textElement.innerText = textNode.text

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('button')
    button.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button)
  })
}

// Goes to the next set of text and options
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

// The meat of it
const textNodes = [
    // Story Start
    {
        id: 1,
        text: "Once upon a time there was a frog. It was a happy frog. One day, it decided that it wanted to search for The Golden Fly, a very delicious fly only spoken of in legend. This is your story.",
        options: [
            {
                text: "Continue",
                nextText: 3
            },
            {
                text: "Go to bed",
                nextText: 2
            }
        ]
    },
    // Go to bed
    {
        id: 2,
        text: "If you say so :/",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Continue
    {
        id: 3,
        text: "Where do you go?",
        options: [
            {
                text: "To bed",
                nextText: 2
            },
            {
                text: "Fly Plains",
                nextText: 4
            },
            {
                text: "Fly Kingdom",
                nextText: 12
            },
            {
                text: "Fly Cave",
                nextText: 18
            }
        ]
    },
    // Fly Plains
    {
        id: 4,
        text: "On your way to Fly Plains, you encounter a horde of flies. The Golden Fly is not among them, but you feel a bit hungry.",
        options: [
            {
                text: "Hunt the flies",
                nextText: 5
            },
            {
                text: "Keep going",
                nextText: 8
            }
        ]
    },
    // Hunt the flies
    {
        id: 5,
        text: "You fill your tummy up on the flies. There was nothing they could do against your power. You start to feel sleepy.",
        options: [
            {
                text: "Go to sleep",
                nextText: 6
            },
            {
                text: "Fight the urge to sleep and keep going",
                nextText: 7
            }
        ]
    },
    // Go to sleep
    {
        id: 6,
        text: "You go to sleep in the middle of the road. You later wake up to a scream. Your own scream. You look at your body only to find a bear eating you. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Fight the urge to sleep and keep going
    {
        id: 7,
        text: "You fail to fight the urge to sleep. You fall aleep in the middle of the road. You later wake up to a scream. Your own scream. You look at your body only to find a bear eating you. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Keep going
    {
        id: 8,
        text: "As you walk around the flies, you hear rumbling. At first you think that it was your stomach, but when it happens again, you notice a bear in the area.",
        options: [
            {
                text: "That was close",
                nextText: 9
            },
            {
                text: "Go back and eat the flies anyway",
                nextText: 5
            }
        ]
    },
    // That was close
    {
        id: 9,
        text: "You encounter an old lady. She looks down at you and says 'You look hungry, sweetie. Would you like a fly? All I need is one of your eyes.'",
        options: [
            {
                text: "Trade with the old lady",
                nextText: 11
            },
            {
                text: "Ignore the old lady",
                nextText: 10
            }
        ]
    },
    // Ignore the old lady
    {
        id: 10,
        text: "You hop around the old lady, but before you could get too far, she stomps on you. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Trade with the old lady
    {
        id: 11,
        text: "The old lady takes one of your eyes. You start to regret your decision, but then she pulls out the fly. It's golden. The Golden Fly at last! All it took was one of your eyes. Was it worth it?",
        options: [
            {
                text: "Yes",
                nextText: -1
            },
            {
                text: "No",
                nextText: -1
            }
        ]
    },

    // Fly Kingdom
    {
        id: 12,
        text: "You go the Fly Kingdom. There, you see a lot of flies. Will you eat the flies or leave them be?",
        options: [
            {
                text: "Eat the flies",
                nextText: 13
            },
            {
                text: "Leave them be",
                nextText: 17
            }
        ]
    },
    // Eat the flies
    {
        id: 13,
        text: "You decide to eat the flies of the Fly Kingdom. You hear screaming all around you. Guard Flies begin coming toward you with spears and armor.",
        options: [
            {
                text: "Run",
                nextText: 14
            },
            {
                text: "Fight",
                nextText: 16
            },
            {
                text: "Hide",
                nextText: 15
            }
        ]
    },
    // Run
    {
        id: 14,
        text: "You decide run away from the Guard Flies. Unfortunately, there are more of them than you thought. They surround you and stab you with their spears. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Hide
    {
        id: 15,
        text: "You decide to hide from the Guard Flies. You find a box and jump inside, hoping that they won't find you. Unfortunately, they do. They surround you and stab you with their spears. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Fight
    {
        id: 16,
        text: "You decide to stand your ground and fight your way out of this mess. You go for the guards in the front first, pulling their armor and spears away with your tongue. You then go for the guards behind you, doing the same. You eat them all. Or so you thought. Unfortunately, one of the flies was a Ninja Fly. It snuck up behind you and stabbed you. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    // Leave them be
    {
        id: 17,
        text: "You decide to leave the flies be. Unfortunately, the don't like frogs here, so they surround you and stab you 37 times in the chest. You die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },

    // Fly Cave
    {
        id: 18,
        text: "On your way to the cave, you realize that there's no such thing as Fly Cave.",
        options: [
            {
                text: "Go back home and go to sleep.",
                nextText: 2
            },
            {
                text: "Go to Fly Plains",
                nextText: 4
            },
            {
                text: "Go to Fly Kingdom",
                nextText: 12
            },
            {
                text: "Realize that The Golden Fly was the friends you made along the way, so you still don't have it.",
                nextText: 19
            }
        ]
    },
    // Fly Cave
    {
        id: 19,
        text: "You grow very sad and lay down in the dirt and cry. You lose all motivation and lay there until the end of your life.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
]

startGame()