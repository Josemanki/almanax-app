export const numberWithDots = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const getKamaRewardColor = (reward: number | string) => {
  if (typeof reward === 'string') {
    return 'bg-white';
  } else if (reward < 2000) {
    return 'bg-white';
  } else if (reward < 5000) {
    return 'bg-wow-green';
  } else if (reward < 10000) {
    return 'bg-wow-blue';
  } else if (reward < 20000) {
    return 'bg-wow-purple';
  } else {
    return 'bg-wow-orange';
  }
};
