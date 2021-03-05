---
sidebar_label: protobuf
title: whylogs.util.protobuf
---

Functions for interacting with protobuf

#### message\_to\_json

```python
message_to_json(x: google.protobuf.message, **kwargs)
```

A wrapper for `google.protobuf.json_format.MessageToJson`

Currently a very thin wrapper...x and kwargs are just passed to
`MessageToJson`

#### message\_to\_dict

```python
message_to_dict(x: google.protobuf.message)
```

Convert a protobuf message to a dictionary

A thin wrapper around the google built-in function.

#### multi\_msg\_reader

```python
multi_msg_reader(f, msg_class)
```

Return an iterator to iterate through protobuf messages in a multi-message
protobuf file.

See also: `write_multi_msg()`

Parameters
----------
f : str, file-object
    Filename or open file object to read from
msg_class : class
    The Protobuf message class, gets instantiated with a call to
    `msg_class()`

Returns
-------
msg_iterator
    Iterator which returns protobuf messages

#### read\_multi\_msg

```python
read_multi_msg(f, msg_class)
```

Wrapper for :func:`multi_msg_reader` which reads all the messages and
returns them as a list.

#### write\_multi\_msg

```python
write_multi_msg(msgs: list, f)
```

Write a list (or iterator) of protobuf messages to a file.

The multi-message file format is a binary format with:

    &lt;varint MessageBytesSize&gt;&lt;message&gt;

Which is repeated, where the len(message) in bytes is `MessageBytesSize`

Parameters
----------
msgs : list, iterable
    Protobuf messages to write to disk
f : str, file-object
    Filename or open binary file object to write to

#### repr\_message

```python
repr_message(x: google.protobuf.message.Message, indent=2, display=True)
```

Print or generate string preview of a protobuf message.  This is mainly
to get a preview of the attribute names and structure of a protobuf
message class.

Parameters
----------
x : google.protobuf.message.Message
    Message to preview
indent : int
    Indentation
display : bool
    If True, print the message and return `None`.  Else, return a string.

Returns
-------
msg : str, None
    If `display == False`, return the message, else return None.

