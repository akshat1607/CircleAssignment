const n = 5;

const Reducer = (state, action) => {
  
  console.log("reducer renders")
  var actionIndex = action.index;
  var prevIndex = action.prevIndex;
  var setPrevIndex = action.setPrevIndex;
  if (state[actionIndex] === 100) {
    let obj = {};
    for (var i = 0; i < n; i++) {
      obj[i] = 100 / n;
    }
    return obj;
  } else if (prevIndex === -1) {
    setPrevIndex(actionIndex);
    return state;
  } else {
    let obj = state;
    obj[prevIndex] = state[actionIndex] + state[prevIndex];
    obj[actionIndex] = 0;
    setPrevIndex(-1);
    return obj;
  }
};

export default Reducer;
