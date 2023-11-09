import { describe, expect, it } from 'bun:test'
import { serviceA } from './index'

describe('service-a', () => {
    it('should be service-a', () => {
        expect(serviceA()).toBe('Hello from Service A')
    })
})