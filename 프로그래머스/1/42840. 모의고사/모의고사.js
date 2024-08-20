function solution(answers) {
    // 수포자들의 패턴
    const patterns = [
      [1,2,3,4,5],
      [2,1,2,3,2,4,2,5],
      [3,3,1,1,2,2,4,4,5,5]
    ]
    // 수포자들의 점수를 저장할 배열
    const score = [0,0,0]
    // 각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
    for(const [i,answer] of answers.entries()){
      for(const [j,pattern] of patterns.entries()){
          if(answer === pattern[i % pattern.length]){
              score[j]++
          }
      }
    }
    const maxScore = Math.max(...score) // 가장 높은 점수 저장
    // 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
    const maxPerson = []    
    for(let i=0 ; i<3 ; i++){
        if(score[i] === maxScore){
            maxPerson.push(i+1)
        }
    }
    return maxPerson.sort((a,b)=>a-b);  // 오름차순 정렬한 배열 반환
}