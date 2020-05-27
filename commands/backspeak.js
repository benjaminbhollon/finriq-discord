// Get the afk Table stored in the SQLite database
const Backspeak = require('../databaseFiles/gameTable.js');

var words = ["you" , "I" , "to" , "the" , "and" , "that" , "of" , "me" , "in" , "this" , "for" , "no" , "have" , "my" , "just" , "not" , "do" , "be" , "on" , "your" , "was" , "we" , "with" , "but" , "all" , "well" , "he" , "about" , "right" , "get" , "here" , "out" , "if" , "her" , "she" , "can" , "up" , "want" , "now" , "go" , "him" , "there" , "one" , "why" , "see" , "come" , "good" , "they" , "really" , "when" , "back" , "from" , "were" , "yes" , "his" , "or" , "who" , "because" , "some" , "then" , "say" , "an" , "way" , "us" , "little" , "never" , "too" , "sure" , "more" , "over" , "our" , "sorry" , "where" , "let" , "maybe" , "down" , "man" , "very" , "by" , "anything" , "much" , "any" , "life" , "even" , "off" , "please" , "thank" , "only" , "help" , "two" , "talk" , "people" , "God" , "still" , "wait" , "into" , "find" , "again" , "thing" , "call" , "told" , "great" , "before" , "better" , "ever" , "night" , "than" , "away" , "first" , "believe" , "fine" , "home" , "after" , "last" , "these" , "put" , "around" , "stop" , "long" , "always" , "listen" , "those" , "big" , "lot" , "kind" , "wrong" , "through" , "new" , "guess" , "care" , "bad" , "mom" , "remember" , "together" , "dad" , "leave" , "mother" , "place" , "understand" , "actually" , "hear" , "baby" , "nice" , "father" , "else" , "stay" , "their" , "course" , "might" , "mind" , "every" , "enough" , "try" , "hell" , "came" , "someone" , "own" , "family" , "whole" , "another" , "house" , "yourself" , "idea" , "ask" , "best" , "must" , "old" , "woman" , "hello" , "which" , "room" , "money" , "left" , "tonight" , "real" , "son" , "hope" , "name" , "same" , "happy" , "pretty" , "girl" , "sir" , "show" , "already" , "may" , "next" , "three" , "found" , "world" , "honey" , "myself" , "exactly" , "probably" , "hurt" , "both" , "while" , "dead" , "alone" , "since" , "excuse" , "start" , "kill" , "hard" , "today" , "car" , "ready" , "until" , "without" , "whatever" , "deal" , "took" , "once" , "friend" , "head" , "stuff" , "most" , "worry" , "second" , "part" , "truth" , "school" , "face" , "forget" , "business" , "each" , "cause" , "soon" , "wife" , "use" , "chance" , "run" , "move" , "anyone" , "person" , "bye" , "somebody" , "heart" , "such" , "point" , "later" , "meet" , "anyway" , "phone" , "reason" , "lost" , "look" , "bring" , "case" , "wish" , "tomorrow" , "trust" , "check" , "end" , "late" , "anymore" , "five" , "least" , "town" , "year" , "make" , "mean" , "play" , "hate" , "ago" , "beautiful" , "fact" , "crazy" , "party" , "sit" , "open" , "afraid" , "between" , "important" , "rest" , "fun" , "kid" , "glad" , "everyone" , "day" , "sister" , "minute" , "everybody" , "bit" , "couple" , "either" , "daughter" , "under" , "break" , "door" , "set" , "close" , "easy" , "doctor" , "far" , "walk" , "need" , "trouble" , "mine" , "though" , "time" , "different" , "hospital" , "anybody" , "alright" , "wedding" , "shut" , "able" , "die" , "perfect" , "police" , "stand" , "hit" , "story" , "dinner" , "against" , "funny" , "husband" , "almost" , "stupid" , "pay" , "answer" , "four" , "office" , "cool" , "news" , "child" , "half" , "yours" , "moment" , "sleep" , "young" , "men" , "sonny" , "lucky" , "pick" , "sometimes" , "them" , "bed" , "also" , "date" , "line" , "lose" , "fire" , "free" , "hand" , "serious" , "shit" , "behind" , "inside" , "high" , "ahead" , "wonderful" , "fight" , "past" , "cut" , "quite" , "number" , "sick" , "game" , "eat" , "nobody" , "death" , "along" , "finally" , "upset" , "seem" , "safe" , "children" , "front" , "shot" , "love" , "clear" , "hot" , "six" , "drink" , "absolutely" , "how" , "sweet" , "alive" , "sense" , "happen" , "special" , "bet" , "blood" , "lie" , "full" , "meeting" , "dear" , "coffee" , "sound" , "fault" , "water" , "ten" , "women" , "welcome" , "buy" , "hour" , "speak" , "think" , "Christmas" , "body" , "order" , "outside" , "hang" , "worse" , "company" , "mistake" , "handle" , "spend" , "totally" , "control" , "marriage" , "power" , "president" , "unless" , "send" , "picture" , "hundred" , "change" , "explain" , "certainly" , "sign" , "boy" , "relationship" , "hair" , "choice" , "anywhere" , "secret" , "future" , "weird" , "luck" , "touch" , "crane" , "question" , "obviously" , "pain" , "straight" , "grace" , "white" , "fast" , "word" , "food" , "none" , "drive" , "work" , "marry" , "light" , "test" , "drop" , "frank" , "sent" , "city" , "dream" , "protect" , "twenty" , "class" , "surprise" , "forever" , "poor" , "mad" , "except" , "gun" , "know" , "dance" , "take" , "especially" , "situation" , "besides" , "week" , "himself" , "act" , "worth" , "top" , "expect" , "rather" , "involve" , "swear" , "piece" , "busy" , "law" , "black" , "movie" , "catch" , "country" , "less" , "perhaps" , "step" , "fall" , "dog" , "win" , "personal" , "admit" , "problem" , "murder" , "strong" , "evil" , "feel" , "honest" , "eye" , "broke" , "miss" , "tired" , "evening" , "human" , "red" , "entire" , "trip" , "club" , "suppose" , "calm" , "imagine" , "fair" , "blame" , "street" , "apartment" , "court" , "terrible" , "clean" , "learn" , "relax" , "million" , "charity" , "accident" , "prove" , "smart" , "message" , "small" , "interest" , "table" , "become" , "mouth" , "pregnant" , "middle" , "ring" , "careful" , "shall" , "team" , "ride" , "figure" , "wear" , "shoot" , "stick" , "ray" , "follow" , "angry" , "instead" , "buddy" , "write" , "early" , "angel" , "nick" , "ran" , "war" , "forgive" , "jail" , "lunch" , "eight" , "thousand" , "music" , "tough" , "tape" , "count" , "college" , "boyfriend" , "proud" , "agree" , "birthday" , "bill" , "seven" , "history" , "share" , "offer" , "hurry" , "feet" , "wonder" , "simple" , "decision" , "building" , "finish" , "voice" , "herself" , "would" , "list" , "mess" , "deserve" , "cute" , "dress" , "interesting" , "Jesus" , "hotel" , "enjoy" , "quiet" , "road" , "eve" , "short" , "beat" , "mention" , "clothe" , "neither" , "fix" , "respect" , "spent" , "prison" , "attention" , "near" , "bar" , "pass" , "gift" , "dark" , "self" , "normal" , "aunt" , "dollar" , "lawyer" , "apart" , "certain" , "plan" , "girlfriend" , "floor" , "whether" , "everything" , "present" , "earth" , "private" , "box" , "cover" , "judge" , "sake" , "mommy" , "possibly" , "worst" , "station" , "accept" , "blow" , "strange" , "save" , "plane" , "yesterday" , "quick" , "lately" , "stuck" , "lovely" , "security" , "report" , "difference" , "store" , "bag" , "ball" , "single" , "doubt" , "blue" , "deep" , "park" , "record" , "lord" , "join" , "key" , "captain" , "card" , "crime" , "window" , "return" , "guilty" , "difficult" , "soul" , "joke" , "service" , "magic" , "uncle" , "promise" , "public" , "bother" , "island" , "seriously" , "cell" , "lead" , "broken" , "advice" , "somehow" , "push" , "concern" , "usually" , "boss" , "rule" , "summer" , "thirty" , "risk" , "letting" , "officer" , "support" , "afternoon" , "born" , "apologise" , "seat" , "nervous" , "across" , "song" , "charge" , "patient" , "boat" , "brain" , "hide" , "general" , "nine" , "huge" , "breakfast" , "horrible" , "age" , "awful" , "pleasure" , "driving" , "system" , "sell" , "quit" , "dying" , "chief" , "faith" , "gay" , "month" , "visit" , "screw" , "letter" , "decide" , "double" , "sad" , "press" , "forward" , "fool" , "smell" , "spell" , "memory" , "mark" , "slow" , "hungry" , "board" , "position" , "hearing" , "rose" , "kitchen" , "force" , "fly" , "during" , "space" , "kick" , "other" , "grab" , "discuss" , "third" , "cat" , "fifty" , "mile" , "fat" , "reading" , "idiot" , "rock" , "suddenly" , "agent" , "bunch" , "destroy" , "track" , "shoes" , "scene" , "peace" , "demon" , "low" , "consider" , "drunk" , "tell" , "knock" , "bell" , "cash" , "give" , "department" , "nose" , "turn" , "keep" , "beer" , "sooner" , "plenty" , "extra" , "attack" , "ground" , "whose" , "weekend" , "matter" , "wrote" , "type" , "opportunity" , "king" , "impossible" , "book" , "machine" , "waste" , "pretend" , "danger" , "wall" , "jump" , "proof" , "complete" , "arrest" , "perfectly" , "warm" , "pull" , "twice" , "easier" , "suit" , "romantic" , "drug" , "comfortable" , "fit" , "divorce" , "begin" , "closely" , "ruin" , "although" , "smile" , "laugh" , "fish" , "treat" , "fear" , "amber" , "guy" , "otherwise" , "excited" , "mail" , "green" , "stole" , "notice" , "excellent" , "pop" , "paper" , "bottom" , "note" , "sudden" , "church" , "bathroom" , "sing" , "glass" , "tree" , "contact" , "shop" , "reach" , "cry" , "cake" , "partner" , "bus" , "computer" , "study" , "star" , "area" , "wind" , "chicken" , "dry" , "hero" , "error" , "are" , "build" , "sea" , "Saturday" , "add" , "birth" , "bird" , "grandmother" , "heavy" , "west" , "lesson" , "heat" , "speed" , "milk" , "rain" , "sugar" , "market" , "process" , "stone" , "serve" , "river" , "super" , "monkey" , "pig" , "chat" , "signal" , "cup" , "bee" , "a" , "above" , "addition" , "among" , "amount" , "angle" , "animal" , "appear" , "apple" , "art" , "as" , "at" , "bank" , "base" , "bear" , "belong" , "block" , "bone" , "brown" , "cannot" , "capital" , "carry" , "centre" , "century" , "circle" , "cloud" , "cost" , "cold" , "column" , "common" , "compere" , "condition" , "contain" , "continue" , "cook" , "copy" , "cow" , "create" , "cross" , "crowd" , "describe" , "desert" , "design" , "detail" , "dictionary" , "direction" , "ear" , "east" , "like" , "edge" , "effect" , "egg" , "element" , "energy" , "engine" , "England" , "English" , "example" , "express" , "famous" , "farm" , "field" , "finger" , "flat" , "flower" , "foot" , "forest" , "form" , "fresh" , "fruit" , "garden" , "gas" , "gold" , "group" , "grow" , "hat" , "hole" , "horse" , "hunt" , "ice" , "inch" , "include" , "increase" , "indicate" , "information" , "insect" , "instrument" , "iron" , "is" , "itself" , "job" , "lady" , "lake" , "land" , "language" , "large" , "lay" , "leg" , "length" , "level" , "lift" , "main" , "many" , "map" , "march" , "bacon" , "gap" , "pan"];

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array;
}

module.exports.execute = async (client, message, args) => {
  Backspeak.sync().then(() =>

    Backspeak.findAll({
      where: {
        gameName: "backspeak"
      }
    }).then(result => {
      if (result.length < 1) {
        var wordslice = words.slice(0,10).join(" ");

        Backspeak.create({
          gameName: "backspeak",
          content: wordslice.reverse(),
          started: Date.now()
        }).then(() => {
          try {
            shuffle(words);
            message.channel.send('**3...**');
            setTimeout(function () {
              message.channel.send('**2...**');
              setTimeout(function () {
                message.channel.send('**1...**');
                setTimeout(function () {
                  message.channel.send(wordslice);
                }, 1000);
              }, 1000);
            }, 1000);
          }
          catch(err) {
            console.log(err);
          }
        }).catch(err => {
          console.error('Backspeak error: ', err);
        });
      }
    }));
  };

module.exports.config = {
  name: 'backspeak',
  aliases: ['backspeak'],
  module: "Games",
  description: 'Under construction.',
  usage: ['backspeak']
};