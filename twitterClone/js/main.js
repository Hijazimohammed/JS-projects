const input = document.getElementById('input-tweet');
const btn = document.querySelector('.button');
const tweets = document.querySelector('.tweets');
const hearts = document.querySelectorAll('.fa-heart');
const arryOfTweets = [];
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', () => {
    hearts[i].classList.add('heart');
  });
}
btn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'new';
  const profile = document.createElement('div');
  profile.className = 'profile';
  const img = document.createElement('div');
  img.className = 'img';
  const image = document.createElement('img');
  image.src =
    'https://pbs.twimg.com/profile_images/1236601897156558848/omWQZoP-_400x400.jpg';
  const h2 = document.createElement('h2');
  h2.innerText = 'Mohammed';
  const span = document.createElement('span');
  span.innerText = '@mohammed_1998h';
  const ellips = document.createElement('i');
  ellips.className = 'fa-solid';
  ellips.classList.add('fa-ellipsis');
  img.appendChild(image);
  img.appendChild(h2);
  img.appendChild(span);
  profile.appendChild(img);
  profile.appendChild(ellips);

  const tweet = document.createElement('div');
  tweet.className = 'tweet';
  const tweeta = document.createElement('div');
  tweeta.className = 'tweeta';
  tweeta.innerText = input.value;
  const imageTweet = document.createElement('div');
  imageTweet.className = 'image';
  const imgTweet = document.createElement('img');
  imgTweet.src =
    'https://pbs.twimg.com/profile_images/1236601897156558848/omWQZoP-_400x400.jpg';
  imageTweet.appendChild(imgTweet);
  tweet.appendChild(tweeta);
  tweet.appendChild(imageTweet);

  const reactions = document.createElement('div');
  reactions.className = 'reactions';
  const comment = document.createElement('i');
  comment.className = 'fa-solid';
  comment.classList.add('fa-comment');
  const retweet = document.createElement('i');
  retweet.className = 'fa-solid';
  retweet.classList.add('fa-retweet');
  const heart = document.createElement('i');
  heart.className = 'fa-solid';
  heart.classList.add('fa-heart');
  const share = document.createElement('i');
  share.className = 'fa-solid';
  share.classList.add('fa-share');
  reactions.appendChild(comment);
  reactions.appendChild(retweet);
  reactions.appendChild(heart);
  reactions.appendChild(share);

  div.appendChild(profile);
  div.appendChild(tweet);
  div.appendChild(reactions);
  arryOfTweets.push(div);
  tweets.appendChild(div);
});
