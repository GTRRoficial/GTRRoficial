export function setAtributesForScreenReaders(element) {
    element.setAtribute("role", "status");
    element.setAtribute("aria-live", "polite");
}
