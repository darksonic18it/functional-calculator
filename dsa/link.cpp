#include <iostream>
using namespace std;

class Node{
  private:
  int data;
  Node *next = nullptr;
  public:
  Node(int val){
    data = val;
    next = nullptr;
  }
  int getData(){
    return data;
  }
  Node* getNext(){
    return next;
  }
  void setNext(Node *n){
    next = n;
  }
  void setData(int val){
    data = val;
  }
};
class Linkedlist{
  private:
  Node *head = nullptr;
  public:
  Linkedlist(){
    head = nullptr;
  }
  void addbegin(int val){
    Node *temp = new Node(val);
    if(head == nullptr){
      head = temp;
    }else{
      temp->setNext(head);
      head = temp;
    }
  }
  void addend(int val){
    Node *temp = new Node(val);
    if(head == nullptr){
      head = temp;
    }else{
      Node *curr = head;
      while(curr->getNext() != nullptr){
        curr = curr->getNext();
      }
      curr->setNext(temp);
    }
  }
  void remove(int val){
    if (head == nullptr){
      cout << "List is empty" << endl;
      return;
    }
    if(head->getData() == val){
     Node *temp = head;
     head = head->getNext();
      delete temp;
    }else{
      Node *curr = head;
      Node *prev = nullptr;
      while(curr != nullptr && curr->getData() != val){
        prev = curr;
        curr = curr->getNext();
      }
      if(curr == nullptr){
        cout << "Value not found" << endl;
        return;
      }
      prev->setNext(curr->getNext());
      delete curr;
    }
  }
  void display(){
    Node *curr = head;
    while(curr != nullptr){
      cout << curr->getData() << " ";
      curr = curr->getNext();
    }
    cout << endl;
  }
};
int main() {
  Linkedlist ll;
  ll.addbegin(10);
  ll.addbegin(20);
  ll.addend(30);
  ll.display();
  ll.remove(20);
  ll.display();
  return 0;
}