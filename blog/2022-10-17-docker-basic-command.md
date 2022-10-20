---
# slug:
title: Docker basic commands
authors: [uuganbat]
tags: [docker]
sidebar_position: 3
---

# Docker basic commands

Here are a few basic Docker commands to help you get started with Docker logs and metrics:

### Show container logs

```bash
docker logs containerName
```

### Show only new logs

```bash
docker logs -f containerName
```

### Show CPU and memory usage

```bash
docker stats
```

### Show CPU and memory usage for specific containers

```bash
docker stats containerName1 containerName2
```

### Show running processes in a container

```bash
docker top containerName
```

### Show Docker events

```bash
docker events
```

### Show storage usage

```bash
docker system df
```
