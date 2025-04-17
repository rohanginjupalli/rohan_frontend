#include<stdio.h>
#define MAX 50
char s[MAX];
int top = -1 ,j=0;;
char a[50],p[50],ch,x;

void push(char ch){
    if(top == MAX-1){
        printf("stack was full");
    }
    else{
        top++;
        s[top] = ch;
    }
}


char pop(){
    char y;
    if(top == -1){
        printf("stack was empty");
    }
    else{
        y=s[top];
        top--;
        return y;
    }
}

int priority(char ch) {
    if (ch == '^')
        return 3;
    else if (ch == '*' || ch == '/')
        return 2;
    else if (ch == '+' || ch == '-')
        return 1;
    else
        return 0;
}


void main(){
    while (1)
    {
        printf("enter the infix expression");
        scanf("%s",a);
        for (int i = 0; a[i]!='\0'; i++)
        {
            ch = a[i];
            if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')){
                p[j]=ch;
                j++;
            }
            else if(ch=='('){
                push(ch);
            }
            else if(ch==')'){
                while ((x=pop())!='(')
                {
                    p[j++]=x;
                }
            }
            else{
                while(priority(s[top])>priority(ch)){
                    x=pop();
                    p[j++]=x;
                }
                push(ch);
             }   

                
            }

        }
        while (top >=0)
        {
            x=pop();
            p[j++]=x;
        }
        printf("%s ",p);
        
        
    }
    
