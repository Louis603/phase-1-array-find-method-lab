
  
function superbowlWin(array) {
    const answer = array.find(season => season.result === 'W')
    if (answer == undefined){
      return undefined
    }

    return answer.year;
}

