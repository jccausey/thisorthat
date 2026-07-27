
// Run this temporarily in the browser console or add to index.html to migrate
const QUESTIONS = [
    { "a": "Movies", "b": "Tv Shows" },
    { "a": "Winter", "b": "Summer" },
    { "a": "Sleep in and work late", "b": "Get up early, get off work early" },
    { "a": "Pause Time", "b": "Rewind Time" },
    { "a": "Camping", "b": "Hotel" },
    { "a": "Dogs", "b": "Cats" },
    { "a": "Music", "b": "Podcasts" },
    { "a": "Swimming pool", "b": "Ocean" },
    { "a": "Fiction", "b": "Non-fiction" },
    { "a": "Coke", "b": "Pepsi" },
    { "a": "iOS", "b": "Android" },
    { "a": "Learn an instrument", "b": "Learn a Language" },
    { "a": "Win the lottery", "b": "Find your dream job" },
    { "a": "Travel all over the world", "b": "Travel ONCE to the moon" },
    { "a": "Know how you're going to die", "b": "Know when you're going to die" },
    { "a": "Subtitles On", "b": "Subtitles Off" },
    { "a": "Lose your phone", "b": "Lose your keys" },
    { "a": "Cake", "b": "Pie" },
    { "a": "Funny Halloween costume", "b": "Scary Halloween costume" },
    { "a": "Vacation", "b": "Staycation" },
    { "a": "Always tell the truth", "b": "Never speak again" },
    { "a": "Time machine", "b": "Teleportation device" },
    { "a": "US Bank", "b": "Launch" }
];

function migrateQuestions() {
    db.ref('questions').set(QUESTIONS).then(() => {
        console.log("Migration successful!");
    }).catch(error => {
        console.error("Migration failed:", error);
    });
}
// Call migrateQuestions() once in the console after app initialization
