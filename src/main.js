const statsItem = ({ category, color, score, icon }) =>
  `<div class='flex items-center bg-${color} p-4 rounded-lg'>
    <div class='flex flex-1 items-center'>
      <img
        src=${icon}
        class='w-[24px] h-[24px]'
        alt='icon-${category.toLowerCase}'
      />
      <p class='font-medium tracking-wide font-hanken text-${color} text-lg ml-2'>
        ${category}
      </p>
    </div>
    <p class='font-bold tracking-wide font-hanken text-lg text-light-lavender'>
      <span class='text-dark-gray-blue'>${score} </span> / 100
    </p>
  </div>`;

const statsContainer = document.querySelector('#stats-container');
const statsData = [
  {
    category: 'Reaction',
    color: 'light-red',
    score: 80,
    icon: './src/assets/icon-reaction.svg',
  },
  {
    category: 'Memory',
    color: 'orangey-yellow',
    score: 92,
    icon: './src/assets/icon-memory.svg',
  },
  {
    category: 'Verbal',
    color: 'green-teal',
    score: 61,
    icon: './src/assets/icon-verbal.svg',
  },
  {
    category: 'Visual',
    color: 'cobalt-blue',
    score: 72,
    icon: './src/assets/icon-visual.svg',
  },
];

statsData.forEach((stats) => {
  statsContainer.innerHTML += statsItem({ ...stats });
});
