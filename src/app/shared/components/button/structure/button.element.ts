export class ButtonElement {
    label: string;
    type: string;
    onClick: () => void;
    disabled: boolean = false;
    constructor(label: string, type: string, onClick: () => void){
        this.label = label;
        this.type = type;
        this.onClick = onClick;
    }
    disable(){
        this.disabled = true;
    }
    enable() {
        this.disabled = false;
    }
}