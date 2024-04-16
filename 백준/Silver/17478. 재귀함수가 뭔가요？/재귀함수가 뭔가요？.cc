#include <iostream>
#include <stack>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int N;

void print(int c) {
	for (int i = 0; i < c * 4; i++) {
		cout << "_";
	}
}

void recursion(int c) {
	print(c);
	cout << "\"재귀함수가 뭔가요?\"" << "\n";
	print(c);
	if (c == N) {	// 교수님이 출력을 원하는 재귀 횟수에 다다르면, 지정된 문구 출력 후 재귀 더이상 진행 X
		cout << "\"재귀함수는 자기 자신을 호출하는 함수라네\"" << "\n";
	}
	else {
		cout << "\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어." << "\n";
		print(c);
		cout << "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지." << "\n";
		print(c);
		cout << "그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"" << "\n";
		recursion(c + 1);
	}
	print(c);
	cout << "라고 답변하였지." << "\n";
	
}

int main(void)
{
	cin >> N;
	cout << "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다." << "\n";
	recursion(0);

	return 0;
}