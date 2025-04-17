#include<stdio.h>
#define MAX 50
int s[MAX],top=-1;
void pop();
void push();
void display();

void push(){
    if(top == MAX-1){
        printf("stack was full");
    }
    else{
        int ele;
        printf("enter the value to be pushed \n ");
        scanf("%d",&ele);
        top++;
        s[top]=ele;
    }
}

void pop(){
    if(top == -1){
        printf("stack was empty");
    }
    else{
        int y;
        y=s[top];
        printf("popped value is : %d \n",y);
        top--;
    }
}

void display(){
    printf("the elements are : ");
    for ( int i = top; i >=0 ; i--)
    {
        printf("%d ",s[i]);
    }
}



void main(){
    int ch;
    while(1){
        printf("enter choice \n");
        printf("1.push,2.pop,3.display");
        scanf("%d",&ch);
    switch(ch){
        case 1:push();
            break;
        case 2:pop();
            break;
        case 3:display();
            break;
        default : printf("enter an valid choice");
    }
}
}