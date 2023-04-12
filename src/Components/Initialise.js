const Initialise=(n)=>
{
  const initialSizes = { 0: 100 };
  var sizesArray = [100];
  for (var i = 1; i < n; i++) {
    initialSizes[i] = 0;
    sizesArray[i] = 0;
  }
  return {initialSizes,sizesArray}
}

export default Initialise