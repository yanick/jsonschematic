        <div class:fullwidth>
            <strong>{label}</strong>
            <slot/>
        </div>

            <script>
    export let label = '';
    export let fullwidth = false;
        </script>

        <style>
        .fullwidth { width: 100% }
        </style>
