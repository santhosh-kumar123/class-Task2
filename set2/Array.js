const emojis = ["star", "papaya", "emojies"];
emojis.map(x => x + "star");
emojis.filter(x => x !== "papaya");
emojis.find(x => x !== "papaya");
emojis.reduce((acc, cur) => acc + "star");
emojis.slice(1, 2, "star");
emojis.splice(1,2,"star")