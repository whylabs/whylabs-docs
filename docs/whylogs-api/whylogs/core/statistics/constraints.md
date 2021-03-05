---
sidebar_label: constraints
title: whylogs.core.statistics.constraints
---

#### logger

Dict indexed by constraint operator.

These help translate from constraint schema to language-specific functions that are faster to evaluate.
This is just a form of currying, and I chose to bind the boolean comparison operator first.

## ValueConstraint Objects

```python
class ValueConstraint()
```

ValueConstraints express a binary boolean relationship between an implied numeric value and a literal.
When associated with a ColumnProfile, the relation is evaluated for every incoming value that is processed by whylogs.

Parameters
----------
op : whylogs.proto.Op (required)
    Enumeration of binary comparison operator applied between static value and incoming stream.
    Enum values are mapped to operators like &#x27;==&#x27;, &#x27;&lt;&#x27;, and &#x27;&lt;=&#x27;, etc.
value :  (required)
    Static value to compare against incoming stream using operator specified in `op`.
name : str
    Name of the constraint used for reporting
verbose : bool
    If true, log every application of this constraint that fails.
    Useful to identify specific streaming values that fail the constraint.

## SummaryConstraint Objects

```python
class SummaryConstraint()
```

Summary constraints specify a relationship between a summary field and a static value,
or between two summary fields.
e.g.     &#x27;min&#x27; &lt; 6
         &#x27;std_dev&#x27; &lt; 2.17
         &#x27;min&#x27; &gt; &#x27;avg&#x27;

Parameters
----------
first_field : str
    Name of field in NumberSummary that will be compared against either a second field or a static value.
op : whylogs.proto.Op (required)
    Enumeration of binary comparison operator applied between summary values.
    Enum values are mapped to operators like &#x27;==&#x27;, &#x27;&lt;&#x27;, and &#x27;&lt;=&#x27;, etc.
value :  (one-of)
    Static value to be compared against summary field specified in `first_field`.
    Only one of `value` or `second_field` should be supplied.
second_field :  (one-of)
    Name of second field in NumberSummary to be compared against summary field specified in `first_field`.
    Only one of `value` or `second_field` should be supplied.
name : str
    Name of the constraint used for reporting
verbose : bool
    If true, log every application of this constraint that fails.
    Useful to identify specific streaming values that fail the constraint.

