function solution(arr1, arr2) {
    var answer = [];
    // 2차원 배열 초기화
    for(let i=0 ; i < arr1.length ; i++){ 
        answer.push(new Array(arr2[0].length).fill(0));
    }
    
    for(let i=0 ; i < arr1.length ; i++){
        for(let j=0 ; j < arr2[0].length ; j++){
            for(let k =0 ; k < arr1[0].length; k++){
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}