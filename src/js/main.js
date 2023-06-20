/*
<div class='flex items-center bg-orangey-yellow p-4 rounded-lg'>
  <div class='flex flex-1 items-center'>
    <img
      src='./assets/icon-memory.svg'
      class='w-[24px] h-[24px]'
      alt='icon-memory'
    />
    <p class='font-medium tracking-wide font-hanken text-orangey-yellow text-lg ml-2'>
      Memory
    </p>
  </div>
  <p class='font-bold tracking-wide font-hanken text-lg text-light-lavender'>
    <span class='text-dark-gray-blue'>92 </span> / 100
  </p>
</div>;
*/

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
import statsData from '../data/data.json';

statsData.forEach((stats) => {
  statsContainer.innerHTML += statsItem({ ...stats });
});
