# Ansible

## Terminology
* **facts**. environment details of the server(s).

## _Ad hoc_ commands

### Get all facts about machines
```bash
ansible <target group name> -m setup
```

### Run _ad hoc_ commands
```bash
ansible <target group name> -a <cmd>
```

### Ansible playbooks
* `-u`. explicitly define a user to use for remote plays.
* `-K`. provide the _sudo_ password at the command prompt.
* `-i`. define a custom inventory file.

## List of Ansible modules
* `group`. create and manage groups.
* `user`. create and manage users.
* `package`. generic package management module.
* `stat`. get information about a file.
* `async_status`. get information about background task.
* `shell`. run a shell command (gives access to pipes and redirects).
