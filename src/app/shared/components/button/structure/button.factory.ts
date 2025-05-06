import { ButtonElement } from "./button.element";

export class ButtonFactory {
    public static create(label: string, name: string, onClick: () => void): ButtonElement {
        return new ButtonElement(label, name, onClick);
    }
    public static createButtonSuccess(label: string, onClick: () => void): ButtonElement {
        return new ButtonElement(label, 'success', onClick);
    }
    public static createButtonPrimary(label: string, onClick: () => void): ButtonElement {
        return new ButtonElement(label, 'primary', onClick);
    }
    public static createButtonWarning(label: string, onClick: () => void): ButtonElement {
        return new ButtonElement(label, 'warning', onClick);
    }
    public static createButtonError(label: string, onClick: () => void): ButtonElement {
        return new ButtonElement(label, 'error', onClick);
    }
}