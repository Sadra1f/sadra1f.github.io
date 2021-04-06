var counter = 0;

const email = 'sadrasaderi@gmail.com';
const icons = [
    {
        url: 'https://instagram.com/Sadra1f',
        inner: '<img class="icon icons8-Social-Instagram-Outline" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADwElEQVR4Xu2aS8hOQRjHf99CWVCsXKIUkUsusXGNhA1iwYJYuq4UO0LsUCjXJbFgQdhQcqeEkEtEKfcVxUI29Nc5NU3nnJlz3vmceb/3TE19vWfm+f7Pf5555nmemS46vHV1uP40BDQW0OEMNFugww2gcYJlt8AaYAYwExgWmfW8A24Bt4HjvtjKEPAAmOwruOZxD4EpPhh8CTgDLPMRGNGYs8ByFx4fAlYBJ1yCIv2+GjhZhM2HgFhWfycgLC9yFBqTrPh247vTCnwIeA8MiWCF5wDXHThmA9eMMR+Aoa1awJ8IlBcEn8XSOBtv4TwfoQ0BjQXEwYCPtTZboPEBPdgJji2IAdJNqljgubVje8wpoEBIcUBeLKAYQN0MhJzHp49jCXkM/gIUnT1N+pNktSYA45OunKN3QL8bjQW8BjYAVx3KzQUOAyMDkRAFAReBxSUVugAsKjkna3jtBBwF1ldU5AiwruLcdFqtBNwFpreowB1gWgsyaiPgZ1I6e9wCeE2dmJS6+lSUE5yAPIELAe31tJ0GVlYEbU87BawwftwPbMqR3e3ZYB4BO6wzeBuwOxABW4FdhqzzwNLYCLC9tjz4pUAE2NalbTUpNgI+AoMNUPr7cyACBgGfDFnfgf6xEfADMB3VQOBrIAIGAF8MWXKwfWMj4A0w3AC1ALgSiID5wGVD1ltgRGwE2Of1FmBvIAI2A3sMWUXxRTSngOrxqsuHaLqX0P1E2pQZ6tTJarURoPvCmwYiZX7y3q7kx0WQkiOdJmaGOCsJjqIiQGDs+0NlgKNcGjq+v7IyQ9e9X20WID10e3zMUqhKJpiKyMoI1zpuf2slIMsK9FuVjDArE3Stvv5X7QSoLKXjr5dlCfLcGwFXcqTk51BOBqjwV2FwUaudAIGz7+hSwApgZNYvEyK0omp6dyDFRyeFk6zMT8mPkiBXi4IAgcyq0LrA530vk1dEQ0BKgs7wqi9LHiXVpPslmIuKgBS3Tgd1XyJ0rX0AOAj8LqF8FE6wCK9i+nmJg1OCo66mpEldK30jqf0r46vSorSAKopUndMQYDH332qCVVcs9LzGAkJbwDegnyHU57FS6FX1lWfHHkWls38yfS5HzwFLDAS6nd0XsODpq5xrXNYzuaLqsTcBdrnbBSSm70WFE28CNPAZoAcK7dT0UGKcC7DPFkhlxPJi1KWTvjtfiKZCyhCgOarLKTGZGsnrUZMMhc/3kuu5wvfB5qSyBPiw31ZjGgLaarm6AWxjAd1AaluJbCygrZarG8B2vAX8Bc9UyEFx5Ot3AAAAAElFTkSuQmCC">'
    },
    {
        url: 'https://github.com/Sadra1f',
        inner: '<img class="icon icons8-Social-Github" alt="" src="data:image/png;base64,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">'
    },
    {
        url: 'mailto:' + email,
        inner: '<img class="icon icons8-Mail" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEfUlEQVR4Xu2ZWchWVRSGnx/0ShSlIPRCJTPJVFARQxFUxDTUStFwxEjNgbA000DMgbLSBgujVFJxwNk0QvBCUtKLAk1QKTPEMsIbQSiJgpIX1hcfm33O2Wf4f//Dd9bt2XsN71p7rXfv00SDS1ODx08FQFUBDY5AdQQavACqJlgdgeoINDgC1RFo8AIImgKXgMdLCtRloE+c70lHYDXwRkmDr7m9BlAcXqkASMhuVQGNfgR6AyuAmSXsA9eB94DNeZpgbe844BVgZEmAeB/YCPye5G9SE3T3v2hA9EpSfJ++H7Wsnw21nxYA6e1kILwMtA811MzrLlrGd6e1kwWAmg0RDIHwQlqjBa7/A9hgwd/NojcJAJGgv4EPgL8iDIy2ihiTxYEce3Za4GKqPhkEvApcAUSGMhGhdcBK4HtgE7AjxuHnDYi+OYIK2fqNZf14xOIHLHAF38ZYYGYA3gJerzN0AvgQOBlhvJ0dC00MOVKkqKO/Y4mI0jsPWAo8WrdAZC4zADL4msfa58C7wI8RnvS0alhQEAIfW9Z/jdCn8bwM8B3DXABolgpRn/xpveHNmP4w3ICYkBEIVZyScDpi/8NW7nFA5wJAzU+dPk6umZPbYhZNNyAGBgJxFXgb2B7Tu3TMVJ0PJejMBcBHwEuBTp8BVA1R/aFtXX/oHKFTk0YsTsfrTsSaZy3rQwL9ygWAePTCQEO1ZbsMiKj+0M2qYbGjd79V0oUIe7qXLAdmpfQnFwCfAqK/WUT7tsRsVAZVxt0t8EMJRqRP/qSVXABsBeaktQgMAKIymUHd/1uWGNdPoyMXABp3IjhppIvnFiZCIkIV+TTlGBABm2E945jzTXr0PVRyASC6GXrmNBZ1OfrP8UyESAxSV+qb1lS/iPD+KUCNt4d9F78fD5xy1q+3d4oQEHIBsAeYFmDlZ+ARzzrNaQU/zPl20AIVrZWIuYm6zvXouGUgfOd8C51QuQDYBzyXAMA5YKhnTX8Lvl/MfgGh0TcWeDBm3U+AyNQPzhpxj6TbaC4ADgCTYxw7AkzyfBcDVOY18oqS8wbCbykrodkA+ARY5InuaQu+Y1GR1+kRJZZ+lyTF8ZVmAWBVRCdWw1Tmk94Z8mDzJfAM8K+jRLR5tkdx4QDoyil+4IoosxpTS8heQPcLV3w9q1AA1IiUAVfSzuYiQPoMmO8oEt9QX9LorElhAAwGvvV4rjc5jbD7IbLtvld0AA4Do8yhQgBQN//FE6G4vm92tyQYerdc6xjUbVN3C903cgGgO7kanh5G60WlJpI0pSUjjbGlO4LeLuqlKyDGKSqd+UnMZ1PUVsE/2UqCr7mhSnQfZfQDR0RMhMsraceVqK2Cf6KVBV9zZyqgSRAsaQAQtVXwjwVrb/mF/wB6Mfoq1HQoAKK2Cl5X3dYutw0EPdElSggAop4KXm/+ZZEbwERA94dYCQFAs1+/mcomXwMjkpwOASBJR6m/VwCUOn0FOF9VQAEgllpFVQGlTl8BzlcVUACIpVZRVUCp01eA81UFFABiqVXcA3d4zkGYRvHEAAAAAElFTkSuQmCC">'
    }
];


function showIcons() {
    document.getElementById("icon-left").innerHTML = icons[counter % icons.length].inner;
    document.getElementById("icon-left").href = icons[counter % icons.length].url;

    document.getElementById("icon-mid").href = icons[(counter + 1) % icons.length].url;
    document.getElementById("icon-mid").innerHTML = icons[(counter + 1) % icons.length].inner;

    document.getElementById("icon-right").href = icons[(counter + 2) % icons.length].url;
    document.getElementById("icon-right").innerHTML = icons[(counter + 2) % icons.length].inner;
}

function btnLeft() {
    counter += 1;
    if (counter > icons.length - 1) {
        counter = 0;
    }
    showIcons();
}

function btnRight() {
    counter -= 1;
    if (counter < 0) {
        counter = icons.length - 1;
    }
    showIcons();
}

function getImageURL() {
    return 'https://www.gravatar.com/avatar/' + md5(email) + '?s=512&r=g';
}

document.getElementById('profile-picture').setAttribute('src', getImageURL());
showIcons();
