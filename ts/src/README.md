# TypeScript

```tex
% | attribute | access control |
% |-----------|----------------|
% | public    | all            |
% | protected | self, child    |
% | private   | self           |

% | constructor | extend | instantiate |
% |-------------|--------|-------------|
% | public      | √      | √           |
% | protected   | √      | ×           |
% | private     | ×      | ×           |

% |                                | usage                     |
% |--------------------------------|---------------------------|
% | <Generics>(args) => ReturnType | function type annotation  |
% | <Generics>(args): ReturnType   | method declaration        |
```