#include <iostream>
using namespace std;

class Matrix {
 private:
  int x[10][10];
  int row, col;

 public:
  void getMatrix(int r, int c) {
    Matrix M1;
    row = r;
    col = c;

    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        cout << "Enter x[" << i << "][" << j << "] : ";
        cin >> x[i][j];
      }
    }
  }

  void putMatrix() {
    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        cout << x[i][j] << " ";
      }
      cout << "\n";
    }
  }

  Matrix add(Matrix M2) {
    Matrix M;
    M.row = row;
    M.col = col;

    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        M.x[i][j] = x[i][j] + M2.x[i][j];
      }
    }
    return (M);
  }
    Matrix prod(Matrix M2) {
    Matrix M;
    M.row = row;
    M.col = col;

    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        M.x[i][j] = x[i][j] * M2.x[i][j];
      }
    }
    return (M);
  }
    Matrix sub(Matrix M2) {
    Matrix M;
    M.row = row;
    M.col = col;

    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        M.x[i][j] = x[i][j] - M2.x[i][j];
      }
    }
    return (M);
  }
    Matrix div(Matrix M2) {
    Matrix M;
    M.row = row;
    M.col = col;

    for (int i = 0; i < row; i++) {
      for (int j = 0; j < col; j++) {
        M.x[i][j] = x[i][j] / M2.x[i][j];
      }
    }
    return (M);
  }
};

int main() {
  Matrix M1, M2, M3;
  cout << "Enter Matrix A\n" << endl;
  M1.getMatrix(2, 2);
  cout << "\nEnter Matrix B\n" << endl;
  M2.getMatrix(2, 2);
  cout << "\nAddition of A and B matrix\n" << endl;
  M3 = M1.add(M2);
  M3.putMatrix();
  cout << "\nProduct of A and B matrix\n" << endl;
  M3 = M1.prod(M2);
  M3.putMatrix();
  cout << "\nDivision of A and B matrix\n" << endl;
  M3 = M1.div(M2);
  M3.putMatrix();
  cout << "\nSubtracction of A and B matrix\n" << endl;
  M3 = M1.sub(M2);
  M3.putMatrix();
  return 0;
}