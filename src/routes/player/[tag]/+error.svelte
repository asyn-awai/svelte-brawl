<script lang='ts'>
    import { page } from '$app/stores'
</script>

<h1>
    {$page.error?.reason ?? JSON.stringify($page.error)}
</h1>