#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#define N 1000

double x[N][N];
double y[N][N];
double z1[N][N];
double z2[N][N];
double z3[N][N];

/* for initializing two matrices x and y */
void init_xy()
{
  int i, j;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      x[i][j] = ((double)(rand()%100))/10000;
      y[i][j] = ((double)(rand()%100))/10000;
    }
  }
}

/* for comparing two matrices z1 and z2 */
int comp_z12()
{
  int i, j;
  int comp = 0;

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      if (z2[i][j] - z1[i][j] > 1e-6 || z1[i][j] - z2[i][j] > 1e-6) {
        printf("Error:  z[%d][%d] = %f, zz[%d][%d] = %f\n", 
            i, j, z1[i][j],  i, j, z2[i][j]);
        comp++;
      }
    }
  }

  return comp;
}

/* for comparing two matrices z1 and z3 */
int comp_z13()
{
  int i, j;
  int comp = 0;

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      if (z3[i][j] - z1[i][j] > 1e-6 || z1[i][j] - z3[i][j] > 1e-6) {
        printf("Error:  z[%d][%d] = %f, zz[%d][%d] = %f\n", 
            i, j, z1[i][j],  i, j, z3[i][j]);
        comp++;
      }
    }
  }

  return comp;
}

/* matrix multiplication with i,j,k loop structure */
void mat_mul_v1()
{
  int i, j, k;
  double reg1 = 0.0;

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      for (k = 0; k < N; k++) { 
        reg1 += x[i][k] * y[k][j];
      }
      z1[i][j] = reg1; reg1 = 0.0;
    }
  }
}

/* TODO: your matrix multiplication for Q.1 */
void mat_mul_v2()
{
  int i, j, k;
  double reg1 = 0.0;

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      for (k = 0; k < N; k++) { 
        reg1 += x[i][k] * y[k][j];
      }
      z2[i][j] = reg1; reg1 = 0.0;
    }
  }
}

/* TODO: your matrix multiplication for Q.2 */
void mat_mul_v3()
{
  int i, j, k;
  double reg1 = 0.0;

  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      for (k = 0; k < N; k++) { 
        reg1 += x[i][k] * y[k][j];
      }
      z3[i][j] = reg1; reg1 = 0.0;
    }
  }
}

int main()
{
  struct timeval start_time, end_time;
  float time;

  init_xy();

  /* Original loop */
  gettimeofday(&start_time, NULL);
  mat_mul_v1();
  gettimeofday(&end_time, NULL);

  time = end_time.tv_sec - start_time.tv_sec +
    (end_time.tv_usec - start_time.tv_usec) / 1000000.0;
  printf("elapsed time of v1: %f\n", time);

  /* Modified loop for Q.1 */
  gettimeofday(&start_time, NULL);
  mat_mul_v2();
  gettimeofday(&end_time, NULL);

  time = end_time.tv_sec - start_time.tv_sec +
    (end_time.tv_usec - start_time.tv_usec) / 1000000.0;
  printf("elapsed time of v2: %f\n", time);

  /* Modified loop for Q.2 */
  gettimeofday(&start_time, NULL);
  mat_mul_v3();
  gettimeofday(&end_time, NULL);

  time = end_time.tv_sec - start_time.tv_sec +
    (end_time.tv_usec - start_time.tv_usec) / 1000000.0;
  printf("elapsed time of v3: %f\n", time);

  return comp_z12() + comp_z13();
}