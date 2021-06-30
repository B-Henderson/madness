const madness = {
  short: {
    id: "short-term",
    name: "Short term",
    duration: "minutes",
    calculation: "10",
    effects: [
      {
        message: "The outside world isn’t safe! Retreat within your mind for safety. You are paralyzed. You may act this out by not moving during the duration.",
        condition: "Paralyzed"
      },
      {
        message: "Why is everything so funny? You must keep laughing (At least when acknowledged). During this time you are incapacitated.",
        condition: "Incapacitated"
      },
      {
        message: "You’re terrified of demons. And spiders. And people. And that rock over there. Pretty much everything. You are Frightened. Jump in fear (Maybe shout too!) if someone acknowledges you.",
        condition: "Frightend"
      },
      {
        message: "What language did you speak? You forget. Time to make a new language. You are incapable of normal speech, and only babble incoherently.",
        condition: "Babeling"
      },
      {
        message: "Enemies are all around you! It’s not safe! Attack the nearest creature each round (friend or foe!). You may act this out by pretending your friends are monsters or evil villains.",
        condition: "Paranoid"
      },
      {
        message: "Did you see that over there? It looked like a flying monkey. You experience vivid hallucinations, and have disadvantage on ability checks. You may act this out by pointing out strange sightings to your companions.",
        condition: "Hallucinating"
      },
      {
        message: "Everybody’s ideas sound like good ideas. What could go wrong? You will do whatever anyone tells you that isn’t obviously self-destructive. You may act this out and do what you are told out-of-game as well, as long as it’s not harmful.",
        condition: "Subservient"
      },
      {
        message: "That looks rather tasty… You want to eat something strange, such as dirt or slime.Ask the player next to you if you can eat their pencil, or dice.",
        condition: "Gluttonous"
      },
      {
        message: "You fall unconscious. Slump over on the ground for the duration.",
        condition: "Unconscious"
      },
      {
        message: "Stoned Out of Your Mind, You believe you have been turned to stone. You may not act, nor may you speak",
        condition: "Stoned"
      }
    ]
  },
  long: {
    id:"long-term",
    name: "Long term",
    duration: "days",
    calculation: "10",
    effects: [
      {
        message: "Did I already say that? You must repeat everything you say twice",
        condition: "Looping"
      },
      {
        message: "Did you see that over there? It looked like a flying monkey. You experience vivid hallucinations, and have disadvantage on ability checks. You may act this out by pointing out strange sightings to your companions.",
        condition: "Hallucinating"
      },
      {
        message: "The walls have ears! ou suffer extreme paranoia, and have disadvantage on Wisdom and Charisma checks.",
        condition: "Paranoid"
      },
      {
        message: "Disgusting! Keep that away! You find something (of your choice, usually the source of your madness) incredibly revolting, as if affected by the Antipathy spell.",
        condition: "Disgusted"
      },
      {
        message: "My skin is made of stone! My flesh rapidly heals! I am unstoppable! You experience a powerful delusion. Ask your DM for a potion name (Discreetly!). You must act as if you are under the effects of that potion",
        condition: "Dilusional"
      },
      {
        message: "My, this must be lucky! You become attached to a non-combat item of your choice. You suffer disadvantage on attack rolls, ability checks, and saving throws when over 30ft away from it",
        condition: "Infatuated"
      },
      {
        message: "I CAN’T SEE! I CAN’T HEAR! Roll a d4. On a 1, you are blinded. Any other roll, you are deafened. If you are blinded, close your eyes and play blind! If you are deafened, don’t listen to anyone other than the DM.",
        condition: "Impaired"
      },
      {
        message: "Who are you? Who, who? Who, who? You suffer from partial amnesia. You know who you are and retain racial traits and class features, but you don’t recognize other people or events prior to your madness",
        condition: "Amnesia"
      },
      {
        message: "??????? You cannot speak",
        condition: "Mute"
      }
    ]
  },
  indefinite:{
    id: "indefinite",
    name: "Indefinite",
    duration: "Forever",
    calculation: "",
    effects: [
      {
        message: "Being drunk keeps me sane! Your character drinks excessively. Act drunk out-of-game.",
        condition: "Drunkard"
      },
      {
        message: "It's like looking in a mirror! Pick a character in the party. Your character must act like them",
        condition: "Impersonating"
      },
      {
        message: "I’m only interesting if I tell tall tales. Bend the truth, exaggerate, or lie about everything.",
        condition: "Lying"
      },
      {
        message: "My goal is all that matters. Endlessly pursue your personal goals regardless of anything else going on, or your party’s desires. This may require going alone.",
        condition: "Arrogant"
      },
      {
        message: "Who cares? Don’t act interested in anything going on around you.",
        condition: "Apathetic"
      },
      {
        message: "You can’t judge me! My dad owns a dealership! Everyone is silently judging your actions. Accuse them of it!",
        condition: "Anxious"
      },
      {
        message: "I am so beautiful… to me! Can’t you see? Act like you’re the smartest, strongest, fastest, and most beautiful person you’ve ever known.",
        condition: "Vain"
      },
      {
        message: "They’re everywhere, and they’re coming for me! You are convinced there are foes chasing you everywhere you go, and they are watching you.",
        condition: "Paranoid"
      },
      {
        message: "This is hilarious! You find it difficult to take anything serious. The more serious the situation, the funnier it is.",
        condition: "Facetious"
      },
      {
        message: "Ritual Madness You’ve suddenly developed a rather strange habit. Every time you roll a die, do something strange (i.e. Sneeze loudly). You must do the same action every time you roll.",
        condition: "Obsessed"
      },
      {
        message: "I’ll bite yer kneecaps off! You feel rather inferior compared to your other companions. Always pick a fight with the biggest enemy to prove yourself.",
        condition: "Overcompensating"
      }
    ]
  }
}

export default madness;