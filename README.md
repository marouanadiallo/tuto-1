# Angualr live formation

## Session 1

1. Setup
    Télécharger et installer Node.js [Download Node.js®](https://nodejs.org/en/download/package-manager)
    En suite installer le CLI d'Angular avec la commande suivante
    > npm install -g @angular/cli
2. Comprendre la notion de sémantique ?
3. Prise en main du CLI d'Angular
4. Présentation de la structure d'un projet angular

## Session 2

1. Présenter la structre d'un projet Angular avant la feature standalone
2. Comprendre la notion des décorateurs Angular
3. le décorateur @Component({...})
   > selector, template, templateUrl, style, styleUrls, styleUrl, host

## Session 3

1. La notion de Binding
2. Les différents types de Binding en Angular
    > interpolation de chaîne de caractères {{ }}
    > one way binding [prop] = "..."
    > (event)= "..."
    > to-way Binding [(prop)] = "..."

3. Composant parent et enfant
    > Sens unidirectionnel => @Input()
    > Sens bidirectionnel => @Input(), @Output()

## Session 4

1. control flow : [lien vers la doc officielle](https://angular.dev/guide/templates/control-flow)
   > @if et *ngIf
   > @for ($count, $index, $first, $last, $even, $odd ), @Empty et ngFor
   > @switch @case, @default et [ngSwitch]

## Session 5

1. Les signaux [Essentiel sur les signaux](https://angular.dev/essentials/signals), [Plus de détails](https://angular.dev/guide/signals)
   > créer un => signal()
   > modification et mise à jour d'un signal => monSignal.set() et monSignal.update((curr)=> ...)
   > créer un signal à partir d'un signal => computed(()=>{})
   > Effectuer un traitement selon la mise à jour d'un signal => effect(()=>{})


## Session 6 : 

1. Composant parent et enfant (Rappel @Input, @Output et nouvelle façon de faire avec l'api Signal)
   > input(), output() [component communication](https://angular.dev/guide/components/inputs)
   > les options

## Session 7 :

1. DI (injection de dépendance) [DI Angular](https://angular.dev/guide/di/dependency-injection)
    > le concepte
    > Brièvement: provider, inject() sans les option
2. Module Http [http client](https://angular.dev/guide/http)
