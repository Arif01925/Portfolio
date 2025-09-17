import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  function animateValue(el, start, end, duration = 900, formatter = v => Math.floor(v)) {
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const current = start + (end - start) * progress
      try { el.textContent = formatter(current) } catch (e) {}
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  function compactFormatter(value) {
    const v = Math.floor(value)
    if (v >= 1000000) return (v / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    if (v >= 1000) return (v / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
    return String(v)
  }

  function animateSkillPercent(el) {
    const target = parseInt(el.getAttribute('data-target') || '0', 10)
    if (isNaN(target)) return
    if (el._animating) return
    el._animating = true
    const display = { set textContent(v) { el.textContent = Math.round(v) + '%' } }
    animateValue(display, 0, target, 900, v => Math.round(v))
    setTimeout(() => { el._animating = false }, 950)
  }

  function animateStatCounters() {
    const counters = document.querySelectorAll('.stat-counter')
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10)
      if (isNaN(target)) return
      const duration = target >= 10000 ? 1400 : 900
      animateValue(el, 0, target, duration, v => compactFormatter(v))
    })
  }

  let observers = []
  function cleanupObservers() {
    observers.forEach(o => { try { o.disconnect() } catch (e) {} })
    observers = []
  }

  function setupObservers() {
    cleanupObservers()

    const appearItems = document.querySelectorAll('.animate-on-scroll')
    if (appearItems && appearItems.length) {
      const onAppear = (entries) => {
        entries.forEach(entry => {
          const el = entry.target
          const idx = parseInt(el.getAttribute('data-index') || '0', 10)
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('in-view'), idx * 80)
            if (el.querySelector && el.querySelector('.stat-counter')) animateStatCounters()
          } else {
            el.classList.remove('in-view')
            if (el.querySelector && el.querySelector('.stat-counter')) {
              const counters = document.querySelectorAll('.stat-counter')
              counters.forEach(c => { c.textContent = '0' })
            }
          }
        })
      }
      const appearObserver = new IntersectionObserver(onAppear, { threshold: 0.15 })
      appearItems.forEach(it => appearObserver.observe(it))
      observers.push(appearObserver)
    }

    const bars = document.querySelectorAll('.progress-bar')
    if (bars && bars.length) {
      const onBar = (entries) => {
        entries.forEach(entry => {
          const el = entry.target
          if (entry.isIntersecting) {
            const pct = el.getAttribute('data-progress') || '0'
            el.style.width = pct + '%'
          } else {
            el.style.width = '0%'
          }
        })
      }
      const barObserver = new IntersectionObserver(onBar, { threshold: 0.25 })
      bars.forEach(b => barObserver.observe(b))
      observers.push(barObserver)
    }

    const percents = document.querySelectorAll('.skill-percent')
    if (percents && percents.length) {
      const onPercent = (entries) => {
        entries.forEach(entry => {
          const el = entry.target
          if (entry.isIntersecting) animateSkillPercent(el)
          else { el.textContent = '0%'; el._animating = false }
        })
      }
      const percentObserver = new IntersectionObserver(onPercent, { threshold: 0.25 })
      percents.forEach(p => percentObserver.observe(p))
      observers.push(percentObserver)
    }

    const stats = document.querySelectorAll('.stat-counter')
    if (stats && stats.length) {
      const onStat = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) animateStatCounters()
          else {
            const counters = document.querySelectorAll('.stat-counter')
            counters.forEach(c => { c.textContent = '0' })
          }
        })
      }
      const statObserver = new IntersectionObserver(onStat, { threshold: 0.25 })
      stats.forEach(s => statObserver.observe(s))
      observers.push(statObserver)
    }
  }

  if (process.client) {
    setTimeout(() => setupObservers(), 50)
    const mo = new MutationObserver(() => setupObservers())
    mo.observe(document.body, { childList: true, subtree: true })
  }
})
