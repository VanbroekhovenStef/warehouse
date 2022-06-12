'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">warehouse documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6b4ee5bd19698c7e00deba5f1659451bc46fd125f57e5cb8a8c6c266d12db6c39c86febf98a1606fd3d7230adffbbbeab4041460942fdb50aeecf21ce3bd9548"' : 'data-target="#xs-components-links-module-AppModule-6b4ee5bd19698c7e00deba5f1659451bc46fd125f57e5cb8a8c6c266d12db6c39c86febf98a1606fd3d7230adffbbbeab4041460942fdb50aeecf21ce3bd9548"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6b4ee5bd19698c7e00deba5f1659451bc46fd125f57e5cb8a8c6c266d12db6c39c86febf98a1606fd3d7230adffbbbeab4041460942fdb50aeecf21ce3bd9548"' :
                                            'id="xs-components-links-module-AppModule-6b4ee5bd19698c7e00deba5f1659451bc46fd125f57e5cb8a8c6c266d12db6c39c86febf98a1606fd3d7230adffbbbeab4041460942fdb50aeecf21ce3bd9548"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ItemModule.html" data-type="entity-link" >ItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' : 'data-target="#xs-components-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' :
                                            'id="xs-components-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' }>
                                            <li class="link">
                                                <a href="components/ItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' : 'data-target="#xs-injectables-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' :
                                        'id="xs-injectables-links-module-ItemModule-0740e6c07a7be1f42f6e8a53ffec633aaf96355e4ff4afeef7318d9293510fbbf813b52141f346a43482183ecb486e0f12ee2d397229b4c965fdbb0fe72d12ad"' }>
                                        <li class="link">
                                            <a href="injectables/ItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderModule-676c2ecaa921ea6a0933e852cc19710ccb143d30ba4aca1a3a8697fdd33f85b88b9047baf2a1c8d711b0e2d1087b984a857f1946bfe574175c801b0849e0a3a3"' : 'data-target="#xs-components-links-module-OrderModule-676c2ecaa921ea6a0933e852cc19710ccb143d30ba4aca1a3a8697fdd33f85b88b9047baf2a1c8d711b0e2d1087b984a857f1946bfe574175c801b0849e0a3a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderModule-676c2ecaa921ea6a0933e852cc19710ccb143d30ba4aca1a3a8697fdd33f85b88b9047baf2a1c8d711b0e2d1087b984a857f1946bfe574175c801b0849e0a3a3"' :
                                            'id="xs-components-links-module-OrderModule-676c2ecaa921ea6a0933e852cc19710ccb143d30ba4aca1a3a8697fdd33f85b88b9047baf2a1c8d711b0e2d1087b984a857f1946bfe574175c801b0849e0a3a3"' }>
                                            <li class="link">
                                                <a href="components/OrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PackagingModule.html" data-type="entity-link" >PackagingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' : 'data-target="#xs-components-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' :
                                            'id="xs-components-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' }>
                                            <li class="link">
                                                <a href="components/PackagingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PackagingFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagingFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PackagingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagingListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' : 'data-target="#xs-injectables-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' :
                                        'id="xs-injectables-links-module-PackagingModule-4119917e1f0315c7379dd03ab0496776b6595349db889d2e08285fcfc1759bd81dc2779621e23ba92049c86a2a552ef9a9f26def14758dc45e5b829657b01211"' }>
                                        <li class="link">
                                            <a href="injectables/PackagingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' : 'data-target="#xs-components-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' :
                                            'id="xs-components-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' }>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' : 'data-target="#xs-injectables-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' :
                                        'id="xs-injectables-links-module-ProductModule-4de3f614d906707e017c7a3f4958986cf8bb250a9011cce7fbb230b3cdc76c40e587b00c4639bb27800e1de690ff7115436195118550f3b94cc2e51ca09e7042"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ItemService.html" data-type="entity-link" >ItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PackagingService.html" data-type="entity-link" >PackagingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Packaging.html" data-type="entity-link" >Packaging</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});