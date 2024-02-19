import {Directive, ElementRef, HostListener, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

const constants = {
  class: {
    DRAG_PLACEHOLDER: 'drag-placeholder',
    LIST_DRAG: 'list-drag',
    DRAGGING: 'dragging',
    HOST_DRAG: 'host-drag'
  }
}

@Directive({
  selector: '[listDraggable]',
  standalone: true
})
export class DraggableDirective implements OnInit {

  private mouseDown: boolean = false
  private dragItem?: HTMLElement
  private dragPlaceholder!: HTMLElement
  private dragStartX: number = 0
  private dragStartY: number = 0
  private xOffset: number = 0
  private yOffset: number = 0

  @HostListener('document:mousedown', ['$event'])
  onMove(event: MouseEvent) {
    if (!this.mouseDown) {
      return
    }

    if (!this.dragItem){
      return
    }

    const newY = event.clientY - this.yOffset - window.scrollY
    const newX = event.clientX - this.xOffset - window.scrollX

    this.dragItem.style.top = `${newY}px`
    this.dragItem.style.left = `${newX}px`

  }

  constructor(@Inject(DOCUMENT)
              private readonly document: Document,
              private readonly host: ElementRef<HTMLElement>,
              private readonly renderer: Renderer2
              ) { }

  ngOnInit(): void {
    this.init()
  }

  get list(): HTMLElement[] {
    return Array.from(this.host.nativeElement.children) as HTMLElement[]
  }
  private init() {
    const {
      class: {
        DRAG_PLACEHOLDER,
        LIST_DRAG,
        DRAGGING,
        HOST_DRAG
      },
    } = constants

    const parent = this.host.nativeElement

    parent.addEventListener('mousedown', (event) => {
      const target = this.document.elementFromPoint(event.clientX, event.clientY) as HTMLElement
      if (target.classList.contains('list') && target.children.length === 0) {
        return
      }
      this.dragStartY = target.offsetTop
      this.dragStartX = target.offsetLeft

      this.mouseDown = true
      this.dragItem = target

      if (this.dragItem) {
        parent.style.userSelect = 'none'
        this.dragItem.style.userSelect = 'none'

        const dragItemRect = this.dragItem.getBoundingClientRect()
        const startHeight = dragItemRect.height
        const startWidth = dragItemRect.width

        this.dragPlaceholder = this.document.createElement('div')
        this.dragPlaceholder.style.width = startWidth + 'px'
        this.dragPlaceholder.style.height = startHeight + 'px'
        this.dragPlaceholder.classList.add(DRAG_PLACEHOLDER)

        parent.insertBefore(this.dragPlaceholder, this.dragItem)
        parent.removeChild(this.dragItem)

        this.dragItem.classList.remove(LIST_DRAG)
        this.dragItem.classList.add(DRAGGING)

        this.dragItem.style.position = 'absolute'
        this.dragItem.style.top = this.dragStartY + 'px'
        this.dragItem.style.left = this.dragStartX + 'px'
        this.dragItem.style.width = startWidth + 'px'
        this.dragItem.style.height = startHeight + 'px'

        this.xOffset = event.clientX - this.dragStartX - window.scrollX
        this.yOffset = event.clientY - this.dragStartY - window.scrollY

        this.renderer.appendChild(this.document.body, this.dragItem)

        this.host.nativeElement.classList.add(LIST_DRAG)
        this.list.forEach(item => item.classList.add(LIST_DRAG))
      }
    })
  }
}
