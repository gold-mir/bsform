const requirements = [
    ["must be more than 3 characters", ".{4,}"],
    ["must be less than 26 characters", "^.{1,25}$"],
    ["must contain a capital letter", ".*[A-Z].*"],
    ["must contain a lowercase letter", ".*[a-z].*"],
    // ["must be at least 10 characters", ".{9,}"],
    ["must contain a number", ".*[0-9].*"],
    ["must contain a special character", "^.*((?![a-z0-9A-Z]).).*$"],
    ["must contain a non-ascii character", ".*[^\x00-\x7F]+.*"],
    ["must contain a space", "^.*[ ].*$"],
    ["must contain the word \"space\"", ".*(space).*"],
    //["must contain more capital letters than lower case letters", ".*"],
    ["must contain \"🌽\"", ".*[🌽].*"],
    ["must end with é", ".*[éÉ]$"],
    ["must end with a consonant", ".*[bcdfghjklmnpqrstvwxyz]$"]
];

export const testString = (input) => {
    return "\"Gender\" " + requirements.find(e => !input.match(e[1]))?.[0] || "you somehow broke it";
};
