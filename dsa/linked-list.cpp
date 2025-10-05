#include <iostream>
using namespace std;

class Node{
  private:
    int data;
    Node *next;
  public:
    Node(int val){
      data = val;
      next = nullptr;
    }
    void setData(int val){
      data = val;
    }
    int getData(){
      return data;
    }
    void setNext(Node *newNext){
      next = newNext;
    }
    Node* getNext(){
      return next;
    }
};

class Linkedlist{
  private:
    Node* head;
  public:
    Linkedlist(){
      head = nullptr;
    }
    void addbegin(int val){
      Node *temp = new Node(val);
      if(head == nullptr){
        head = temp; 
        return;
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
      if(head == nullptr){
        return;
      }
      if(head->getData() == val){
        Node *temp = head;
        head = head->getNext();
        delete temp;
        return;
      }else{
        Node *curr = head;
        Node *prev = nullptr;
        while(curr != nullptr && curr->getData() != val){
          prev = curr;
          curr = curr->getNext();
        }
        if(curr == nullptr){
          return; // value not found
        }
        prev->setNext(curr->getNext());
        delete curr;
      }
    }
    void display(){
      Node *temp = head;
      while(temp != nullptr){
        cout << temp->getData() << " ";
        temp = temp->getNext();
      }
      cout << endl;
    }
};

int main() {
  Linkedlist list;
  list.addbegin(10);
  list.addbegin(20);
  list.addend(30);
  list.display();   // Expected: 20 10 30
  list.remove(20);
  list.display();   // Expected: 10 30
  return 0;
}
