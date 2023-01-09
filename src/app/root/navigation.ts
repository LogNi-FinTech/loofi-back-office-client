import { FuseNavigationItem } from "@fuse/components/navigation";

export const navigationItem : FuseNavigationItem[]= [
    {
        icon: "heroicons_outline:chart-pie",
        id: "Transaction",
        title: "Transaction",
        type: "collapsable",
        feature: "transaction",
        children: [
            {
                icon: "currency_exchange",
                id: "transaction",
                link: "/transaction",
                title: "Transaction",
                type: "basic",
                feature: "transaction"
            },
            {
                icon: "heroicons_outline:chart-pie",
                id: "example",
                link: "/examplevv",
                title: "child 2",
                type: "basic",
                feature: "child 2"
            }
        ]
    },
    {
        icon: "account_circle",
        id: "Account",
        title: "Account",
        type: "collapsable",
        feature: "account",
        children: [
            {
                icon: "person_add_alt",
                id: "account-account",
                link: "/account/create",
                title: "Create Account",
                type: "basic",
                feature: "account-create"
            },
            {
                icon: "info",
                id: "account-detail",
                link: "/account/detail",
                title: "Detail Account",
                type: "basic",
                feature: "account-detail"
            },
            {
                icon: "account_balance",
                id: "account-balance",
                link: "/account/balance",
                title: "Account Balance",
                type: "basic",
                feature: "account-balance"
            },
            {
                icon: "manage_accounts",
                id: "account-statement",
                link: "/account/statement",
                title: "Account Statement",
                type: "basic",
                feature: "account-statement"
            },
        ]
    },
    {
        icon: "heroicons_outline:chart-pie",
        id: "Ledger",
        title: "Ledger",
        type: "collapsable",
        feature: "ledger",
        children: [
            {
                icon: "currency_exchange",
                id: "Ledger",
                link: "/ledger",
                title: "Ledger List",
                type: "basic",
                feature: "ledger"
            }
        ]
    },
    {
        icon: "heroicons_outline:chart-pie",
        id: "TxnType",
        title: "TxnType",
        type: "collapsable",
        feature: "txnType",
        children: [
            {
                icon: "currency_exchange",
                id: "Txn-Type",
                link: "/txn/type",
                title: "Txn Type",
                type: "basic",
                feature: "txnType-type"
            },
            {
                icon: "currency_exchange",
                id: "TxnType-Free",
                link: "/txn/free",
                title: "Txn Free",
                type: "basic",
                feature: "txnType-free"
            }
        ]
    },
    {
        icon: "heroicons_outline:chart-pie",
        id: "Report",
        title: "Report",
        type: "collapsable",
        feature: "report",
        children: [
            {
                icon: "currency_exchange",
                id: "Balance-Sheet",
                link: "/report/balance-sheet",
                title: "Balance Sheet",
                type: "basic",
                feature: "balance-sheet"
            },
            {
                icon: "currency_exchange",
                id: "Income-Statement",
                link: "/report/income-statement",
                title: "Income-Statement",
                type: "basic",
                feature: "income-statement"
            }
        ]
    },
    {
        icon: "app_registration",
        id: "Registration",
        title: "Registration",
        type: "collapsable",
        feature: "registration",
        children: [
            {
                icon: "how_to_reg",
                id: "Registration-List",
                link: "/registration/list",
                title: "Registration",
                type: "basic",
                feature: "registration-list"
            },
            {
                icon: "how_to_reg",
                id: "bulk-registration",
                link: "/registration/bulk",
                title: "Bulk-Registration",
                type: "basic",
                feature: "bulk-registration"
            }
        ]
    },
];