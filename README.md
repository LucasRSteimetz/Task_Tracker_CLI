# Test Tracker 8000

Welcome to Task Tracker 8000

This a simple task tracker CLI application developed using JS and Node.

## Dependencies

To run Task Tracker 8000, you only need to install npm and node.
Go to "https://nodejs.org" and install the LTS version.
To check if you've installed it, run the following commands on the terminal:

```bash
nove -v
npm -v
```

To install the application, you run the following command in your terminal:
```
git clone https://github.com/LucasRSteimetz/Task_Tracker_CLI.git
```

## How to use it:

In this app, you may add, update, delete, list and mark tasks.

### Commands

#### add

```
node test_tracker.js add "description"
```

Example:

```
node test_tracker.js add "Study physics"
```

#### update

```
node test_tracker.js update id "description"
```

Example:

```
node test_tracker.js update 3 "Do homework"
```

#### delete

```
node test_tracker.js delete id
```

Example:

```
node test_tracker.js delete 3
```

#### list

You can list all the task by simply giving the list command or you can add three different status: todo, in-progress or done.

```
node test_tracker.js list status
```

Example:

```
node test_tracker.js list
node test_tracker.js list todo
node test_tracker.js list in-progress
node test_tracker.js list done
```

#### mark

```
node test_tracker.js mark id status
```

Example:

```
node test_tracker.js mark 3 done
node test_tracker.js mark 7 in-progress
```

## Limitations

You can add up to 100 tasks to your list. After that, you'll have to delete previous tasks to add new ones.

## Enjoy it
