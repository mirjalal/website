---
title: Setters injection
---

Instead of using `by inject()` lazy delegate expression to retrieve desired dependency, you can inject the property directly

:::note
 This feature is experimental
:::

## Injecting a property

Let's take a class that need some property injection:

```kotlin
class B
class C

class A {
    lateinit var b: B
    lateinit var c: C
}
```

You can inject your properties with `inject` extension like follow:

```kotlin
val a : A = A()

// inject properties
a::b.inject()
a::c.inject()
```

:::info

- `inject()` on a property is not using any reflection API

- For any special injection (like ViewModel for Android ...), use manual injection like `a.b = getViewModel(...)`
:::

## Injecting all properties

Another way to inject all your dependencies, is to use `inject` from your instance:

```kotlin
val a : A = A()

// inject all properties
a.inject(a::b, a::c)
```

:::note 
This `T.inject(...)` function is using reflection to guess your properties types here
:::