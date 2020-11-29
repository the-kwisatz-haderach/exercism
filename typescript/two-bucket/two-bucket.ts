export enum Bucket {
  One = 'one',
  Two = 'two',
}

export class TwoBucket {
  private readonly goal: number
  private readonly starterBuck: Bucket
  private readonly otherBuck: Bucket
  private buckets: Record<Bucket, { capacity: number; content: number }>

  constructor(
    buckOneSize: number,
    buckTwoSize: number,
    goal: number,
    starterBuck: Bucket
  ) {
    this.goal = goal
    this.starterBuck = starterBuck
    this.otherBuck = this.getOtherBuck(starterBuck)
    this.buckets = {
      [Bucket.One]: {
        capacity: buckOneSize,
        content: 0,
      },
      [Bucket.Two]: {
        capacity: buckTwoSize,
        content: 0,
      },
    }
  }

  private getOtherBuck(buck: Bucket): Bucket {
    return buck === Bucket.One ? Bucket.Two : Bucket.One
  }

  moves(): number {
    const starterBucket = this.buckets[this.starterBuck]
    const otherBucket = this.buckets[this.otherBuck]

    let actions = 0
    while (
      starterBucket.content !== this.goal &&
      otherBucket.content !== this.goal
    ) {
      if (starterBucket.content === 0) {
        starterBucket.content = starterBucket.capacity
      } else if (otherBucket.content !== otherBucket.capacity) {
        const amount = Math.min(
          starterBucket.content,
          otherBucket.capacity - otherBucket.content
        )
        starterBucket.content -= amount
        otherBucket.content += amount
      } else {
        otherBucket.content = 0
      }
      actions += 1
    }

    return actions
  }

  get goalBucket(): Bucket {
    return this.buckets[this.starterBuck].content === this.goal
      ? this.starterBuck
      : this.otherBuck
  }

  get otherBucket(): number {
    return this.buckets[this.getOtherBuck(this.goalBucket)].content
  }
}
