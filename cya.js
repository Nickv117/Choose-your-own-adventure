alert(
  `Hello, welcome to my game, an adventure of grand proportions, but first...`
);
var name = prompt("What is your name, 'O adventurer mine?");

if (name) {
  alert("You come to in a dark forboding forest with a clearing.");

  var A = "Look ahead";
  var B = "Check environment";
  var C = "Do nothing";

  var choice = prompt(`Do you ${A}, ${B}, ${C}?`);

  if (A) {
    alert("You see a house in the distance that beckons for you to approach");
  } else if (B) {
    alert(
      "You look around, and notice a cave off to the left. You enter it and find a divine sword, but you figure it wont be dangerous to go alone, and leave it there."
    );
  } else if (C) {
    alert(
      `You stand there, and wonder what you are doing with your life? How many years did you waste on Becky? your mind focuses, and head towards the house.`
    );

    alert(
      `You come up to an abandoned house, and try the door. It opens without resistance, and you step into a hall way. Theres a door before you, and a path to your left and right.`
    );

    var left = "Go left";
    var door = "Go through the door";
    var right = "Go right";

    var choice = prompt(`Do you ${left}, ${door}, or ${right}?`);

    if (left) {
      alert(
        `You go to the left. You arrive into a dining room, its unnervingly quaint with a huge dinner prepared for no one, but you. Its delectibly irresistable..`
      );

      alert(
        `You see a spot set for someone to sit, as well as a door with a note you can't make out on it.`
      );

      var sit = "sit at the table";
      var turn = "turn back";
      var note = "investigate the note";

      var choice = prompt(`Do you ${sit}, ${turn}, or ${note}?`);

      if (sit) {
        alert(
          `You sit at the table. the aroma of the food intoxicates you as an overwhelming hunger sets in. You notice a particular stew, unsure of it's contents, but dying of hunger, you begin to scarf it down.`
        );

        alert(
          `Before you take another bite, you look down and notice a key in your spoonful, as well as a finger that floats to the top.. Its pointing towards the door.`
        );

        alert(
          `You start to walk towards the door, key in hand, uncertain how you felt about what was in that stew. You use the key, and open the door. You are assaukted by the stech of death, rotting decaying flesh, and treasures you've only seen in movies like the Goonies.`
        );

        alert(
          `You step into the room, but you feel a hot foul breath go down your neck. You turn to come face-to-face with what appears as a malnourished deformed corpse-like figure.`
        );
      } else if (turn) {
        alert(
          `You turn to try and go back to the hallway. The entrance doesn't exist anymore, and its just a wall. You seem to be stuck here now, and turn to the table.`
        );

        alert(
          `You sit at the table. the aroma of the food intoxicates you as an overwhelming hunger sets in. You notice a particular stew, unsure of it's contents, but dying of hunger, you begin to scarf it down.`
        );

        alert(
          `Before you take another bite, you look down and notice a key in your spoonful, as well as a finger that floats to the top.. Its pointing towards the door.`
        );

        alert(
          `You start to walk towards the door, key in hand, uncertain how you felt about what was in that stew. You use the key, and open the door. You are assaukted by the stech of death, rotting decaying flesh, and treasures you've only seen in movies like the Goonies.`
        );

        alert(
          `You step into the room, but you feel a hot foul breath go down your neck. You turn to come face-to-face with what appears as a malnourished deformed corpse-like figure.`
        );
      } else if (note) {
        alert(
          `You walk towards the door, and investigate the note. it reads, "Infinite wealth and treasures lay beyond for those who take up my passion.`
        );

        alert(
          `The note seems to be scrawled with dried blood. You don't feel good about the predicament you're in, but you turn to face the table.`
        );

        alert(
          `You sit at the table. the aroma of the food intoxicates you as an overwhelming hunger sets in. You notice a particular stew, unsure of it's contents, but dying of hunger, you begin to scarf it down.`
        );

        alert(
          `Before you take another bite, you look down and notice a key in your spoonful, as well as a finger that floats to the top.. Its pointing towards the door.`
        );

        alert(
          `You start to walk towards the door, key in hand, uncertain how you felt about what was in that stew. You use the key, and open the door. You are assaukted by the stech of death, rotting decaying flesh, and treasures you've only seen in movies like the Goonies.`
        );

        alert(
          `You step into the room, but you feel a hot foul breath go down your neck. You turn to come face-to-face with what appears as a malnourished deformed corpse-like figure.`
        );
      }

      var observe = "observe the creature";
      var push = "shove the creature back";

      var choice = prompt(`Do you ${observe}, or ${push}?`);

      if (observe) {
        alert(
          `You don't react, just watch this thing in front of you. It's empty sockets pierce into youl filling you with dread, but you notice it gestures down to your side. You look and see a putrid rotting arm lying there, caked in dried blood, green as Dr. Seuss' eggs and ham.`
        );
        alert(
          `You grab the arm, and take a mouthful bite out of it. hearing the delicious crunch of skin, and bone fills you with sense of glee.`
        );
        alert(
          `The figure steps back into the shadows of the room. The door is wide open, all the riches inside this room yours, and a banquet fit for a king in front of you. You're still insatiably hungry though.`
        );
        alert(
          `You head back to the table, and grab some greens this time. You love your veggies after all. When you take a bite, you repulsivly spit it back out. You try the pasta, same thing. Everything on that table sickens you, but you finally turn to the stew. One bite later, and the next, the stew is devoured by you.`
        );
        alert(
          `Your hunger returns, as you step out of the house. It's all you can think about, and your drive now in life. You set back to town. Some say children, and adults have started going missing ever since that night...`
        );
        break;
      } else if (push) {
        alert(
          `You push as hard as you can against the creature, shoving it back into the dining room. It shrieks, and tries to grab at you, but misses you and grabs onto the door instead. as it falls back the door slams shut. You notice, though the door doesnt have a handle on this side.`
        );
        alert(
          `Looking about the room, there's no way out. You're locked in. All this wealth, but can't do anything with it.. This hunger taking over your mind.. You sit in the room, and stare at the rotting dismembered limbs strewn about the entrance hidden from the site of riches.`
        );
        alert(
          `You grab a leg to snack on, and sit and wait. You hope some wary traveler will stop by and let you out..`
        );
        break;
      }
    } else if (door) {
      alert(
        `You try the door, and it opens to a bathroom. You step inside, and begin to notice the rooms design doesn't match the house.. How odd?`
      );

      alert(
        `You begin to hear someone humming, as you notice someone is in the shower, taking a bath. You try to leave, but notice that the door seemingly is gone...`
      );

      alert(
        `When you turn back you are struck down by some horrifyingly creepy figure. Who it was, you dont know, but one this is for sure. You wont be doing that again.`
      );

      alert(`You died.`);
      break;
    } else if (right) {
      alert(
        `You go right. You turn at the end of the corridor into a old musty decrepit living room. A chill washes over you.`
      );

      alert(
        `You take notice of an old fireplace, burnt and cold, as well as a slightly ajar rug, and staircase that leads to the second floor.`
      );

      var fp = "investigate the fireplace";
      var sc = "go up the stairs";
      var rug = "investigate the rug";

      var choice = prompt(`Do you ${fp}, ${sc}, or ${rug}?`);

      if (fp) {
        alert(
          `You investigate the fireplace. Searching about it, you find an old burnt new article. You can make out a headline, "cultist activities reported at the ..." the rest is unreadable.`
        );

        alert(
          `You check the sides of the fireplace as well, and find what used to be old chalk drawings. They seem to be of a little girl, and her family.`
        );

        alert(
          `Out of the corner of your eye, something darts up the stairs. You hear a small giggle as small footsteps trot in the hall above you. You decide to investigate, against your better judgement.`
        );

        var yes = "follow the girl";
        var no = "turn back and run";

        var choice = prompt(`Do you ${yes}, or ${no}?`);

        if (yes) {
          alert(
            `Against your better judgment, you head down the eerie hall. The door where the little girl gives off a peacful calming aura, as you near it. You enter the room, and notice it's seemingly untouched by time. It's warm, and empowring.`
          );

          alert(
            `You notice the girl, smiling. She walks over and takes your hand then leads you to her closet. She points to it for you to open. You open the closet.`
          );

          alert(
            `There, inside the closet, is an object. You cant make it out, but it glows with a light of reassurance. You take it, and hold it close to ward off the evil of the house.`
          );

          alert(
            `You head down the stairs, and notice the rug has been moved, with an opened latch to the cellar. It's gaping maw waiting for your approach. You head down, and see a circle sprawled on the floor.`
          );

          alert(
            `You see figure, floating in it's center. Eyes blood red, and teeth sharp as daggers. It smiles at you, and motions for you to follow, how strange it reminds you of something.. You head towards it, and as you get closer the relic begins to illuminate, and gets brighter each step. The figure begins to cower and scream in pain, as you hold out the object, it now blindingly bright. You close your eyes until silence evelopes the room. You check and see nothing but an empty cellar.`
          );

          alert(
            `You head out of the house, and hear a voice, you turn to face it. You see a lady, she seems to be dressed just like the little girl, and is holding what appears to be an old doll. Sha says thank you, and gives you a smile and wave. You awkwardly smile and wave back, and then book it to your car. You vow never to go out soul searching in the woods again.`
          );
          break;
        } else if (no) {
          alert(
            `You listen to your gut, and try to run. Little girls in horror movies are always evil right?`
          );

          alert(
            `You freeze up as this bloody toothed grin, and piercing red eyes stare at you from the bottom. A shill scream erupts from them as you are knocked down, and dragged into the cellar. You died.`
          );
          break;
        }
      } else if (sc) {
        alert(
          `You head up the staircase. You come to the landing, and see a hallway with many doors. At the end of the hall there's a single door, slightly open, and a little girl pokes her head out.`
        );

        alert(`She motions for you to follow her.`);

        var yes = "follow the girl";
        var no = "turn back and run";

        var choice = prompt(`Do you ${yes}, or ${no}?`);

        if (yes) {
          alert(
            `Against your better judgment, you head down the eerie hall. The door where the little girl gives off a peacful calming aura, as you near it. You enter the room, and notice it's seemingly untouched by time. It's warm, and empowring.`
          );

          alert(
            `You notice the girl, smiling. She walks over and takes your hand then leads you to her closet. She points to it for you to open. You open the closet.`
          );

          alert(
            `There, inside the closet, is an object. You cant make it out, but it glows with a light of reassurance. You take it, and hold it close to ward off the evil of the house.`
          );

          alert(
            `You head down the stairs, and notice the rug has been moved, with an opened latch to the cellar. It's gaping maw waiting for your approach. You head down, and see a circle sprawled on the floor.`
          );

          alert(
            `You see figure, floating in it's center. Eyes blood red, and teeth sharp as daggers. It smiles at you, and motions for you to follow, how strange it reminds you of something.. You head towards it, and as you get closer the relic begins to illuminate, and gets brighter each step. The figure begins to cower and scream in pain, as you hold out the object, it now blindingly bright. You close your eyes until silence evelopes the room. You check and see nothing but an empty cellar.`
          );

          alert(
            `You head out of the house, and hear a voice, you turn to face it. You see a lady, she seems to be dressed just like the little girl, and is holding what appears to be an old doll. Sha says thank you, and gives you a smile and wave. You awkwardly smile and wave back, and then book it to your car. You vow never to go out soul searching in the woods again.`
          );
          break;
        } else if (no) {
          alert(
            `You listen to your gut, and try to run. Little girls in horror movies are always evil right?`
          );

          alert(
            `You freeze up as this bloody toothed grin, and piercing red eyes stare at you from the bottom. A shill scream erupts from them as you are knocked down, and dragged into the cellar. You died.`
          );
          break;
        }
      } else if (rug) {
        alert(
          `You move the table aside, and investigate the rug. It's musty and old, but seemed to have been moved recently.`
        );

        alert(
          `You notice theres a latch beneath it with a handle slightly poking out from underneath. You open it, and it leads down to a immensely dark celler. Your eyes can't pierce the darkness.`
        );

        alert(
          `You muster up all your courage and go down the stairs. When you reach the foot you hear a voice whisper, "Step inside, and all the power in the known world shall be yours.." The voice drifts away.`
        );

        alert(
          `You see a dimly lit circle, of a design you've never seen before. Ominous red candles dart the room. Before you can begin to wonder, what the circle is, or better yet why these candles seem to be going for so long in a sealed room, you move towards the circle.`
        );

        alert(
          `You panic, and try to turn back, but regardless of what you do you cannot stray from the path your heading down. You step into the circle.`
        );

        alert(
          `Upon reaching the center, a cold malignant feeling swells in your heart. You black out. When you awake, you are lying on the floor of the room inside the ritual circle. You try to move. Nothing. You try to scream. Nothing. Suddenly you laugh, but you didn't want to laugh. You begin to say, "thank you, for giving me this gift. Now sit and observe the damnation of hummanity." You stand, and walk out into the world. You are stuck in your own prison, and can't do anything but internally scream for the rest of time.`
        );

        break;
      }
    }
  } else {
    alert(
      `You decide screw this, I'm going home, and turn back. You head to your car, and drive home. Who needs a grand adventure right? It probably was a smart choice..`
    );
  }
} else {
  alert("This adventure is totally sweet, you should give it a try...");
}
