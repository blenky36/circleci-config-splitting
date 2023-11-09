import { describe, expect, it } from 'bun:test'
import { serviceB } from './index'

describe('service-b', () => {
    it('should be service-b', () => {
        expect(serviceB()).toBe('Hello from Service B')
    })
})