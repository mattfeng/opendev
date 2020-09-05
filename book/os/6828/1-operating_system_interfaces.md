The job of an **operating system** is to **share a computer among multiple programs** and to **provide a more useful set of services than the hardware alone** supports.

Each running program is called a **process**.
* Instructions
* Data
* Stack

To invoke a kernel service, a program makes a **system call**. The kernel performs the service and then returns.

**xv6 services**
* Processes
* Memory
* File descriptors
* Pipes
* File system

How does the _shell_ use these services? The _shell_ runs in user space.


## 1.1 Processes and memory

* xv6 process consists of:
  * user-space memory
  * per process state private to the kernel
  * (?) where do time-shared processes get saved?
* `fork` lets a process create a new process.
  * Child has _exact same memory contents_
  * In parent, `fork` returns child PID.
  * In child, `fork` returns 0.


```cpp
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>

int main() {
  int pid = fork();

  if (pid > 0) {
    printf("parent: child=%d\n", pid);
    pid = wait((int*) 0);
    printf("child %d is done\n", pid);
  } else if (pid == 0) {
    printf("child: exiting\n");
    exit(0);
  } else {
    printf("fork error\n");
  }
}
```

## 1.2 I/O and File descriptors
* **File descriptor.** A small integer representing a kernel-managed object that a process may read from or write to.
* 0 = stdin, 1 = stdout, 2 = stderr
* _Every process has a private space of file descriptors starting at 0._
* `close` releases a file descriptor.
* `open`, `pipe`, and `dup` create file descriptors.
* `fork` copies the parent's file descriptor table along with its memory.
* `exec` replaces the calling process's memory but preservces the file table.
* Between `fork` and `exec`, the shell has the chance to redirect the child's I/O without disturbing the I/O of the shell.
* Parent and child file descriptors share the file descriptor offset.

